import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { DialectId } from '../types';

interface AudioPlayerButtonProps {
  text: string;
  arabicText?: string;
  dialect: DialectId;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const DIALECT_NAMES: Record<DialectId, string> = {
  levantin: 'Levantine Arabic',
  egyptien: 'Egyptian Arabic',
  darija: 'Moroccan Arabic',
  golfe: 'Gulf Arabic'
};

// Caches globaux côté client pour une réactivité instantanée (0 ms) lors des clics répétés
const clientAudioCache = new Map<string, string>(); // Stocke les URLs Blob des audios réussis
const failedTtsCache = new Set<string>(); // Mémorise les échecs API/quota pour passer directement au fallback vocal

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = ({
  text,
  arabicText,
  dialect,
  label,
  className = '',
  size = 'md'
}) => {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);

  const cacheKey = `${dialect}_${text}_${arabicText || ''}`;

  const playAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (loading || playing) return;

    // 1. Si on a déjà l'audio en cache côté client, on le joue IMMÉDIATEMENT (0 ms de latence)
    if (clientAudioCache.has(cacheKey)) {
      playCachedBlob(clientAudioCache.get(cacheKey)!);
      return;
    }

    // 2. Si le quota Gemini avait déjà échoué sur ce mot, on passe directement à la synthèse vocale instantanée
    if (failedTtsCache.has(cacheKey)) {
      fallbackSpeech();
      return;
    }

    setLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000); // Timeout de sécurité 6s

      const response = await fetch('/api/gemini/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          arabicText,
          dialect: DIALECT_NAMES[dialect]
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.audioBase64) {
          // Convertir en Blob URL (plus fiable et instantané que Web Audio API sur mobile/iframe)
          const binaryString = window.atob(data.audioBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          const blob = new Blob([bytes], { type: 'audio/wav' });
          const blobUrl = URL.createObjectURL(blob);
          
          if (clientAudioCache.size > 200) {
            const firstKey = clientAudioCache.keys().next().value;
            if (firstKey) {
              URL.revokeObjectURL(clientAudioCache.get(firstKey)!);
              clientAudioCache.delete(firstKey);
            }
          }
          clientAudioCache.set(cacheKey, blobUrl);
          
          setLoading(false);
          playCachedBlob(blobUrl);
          return;
        }
      } else {
        // En cas d'erreur 429 ou autre, on mémorise pour ne pas ralentir le prochain clic
        failedTtsCache.add(cacheKey);
      }
      
      setLoading(false);
      fallbackSpeech();
    } catch (err) {
      console.warn("TTS API indisponible ou lente, passage en synthèse vocale native:", err);
      failedTtsCache.add(cacheKey);
      setLoading(false);
      fallbackSpeech();
    }
  };

  const playCachedBlob = (blobUrl: string) => {
    try {
      const audio = new Audio(blobUrl);
      setPlaying(true);

      // Timeout de sécurité au cas où l'événement onended ne se déclenche pas
      const safetyTimeout = setTimeout(() => {
        setPlaying(false);
      }, 15000);

      audio.onended = () => {
        clearTimeout(safetyTimeout);
        setPlaying(false);
      };
      audio.onerror = () => {
        clearTimeout(safetyTimeout);
        setPlaying(false);
        fallbackSpeech();
      };

      audio.play().catch((err) => {
        console.warn("Lecture HTML Audio bloquée, fallback:", err);
        clearTimeout(safetyTimeout);
        setPlaying(false);
        fallbackSpeech();
      });
    } catch (err) {
      setPlaying(false);
      fallbackSpeech();
    }
  };

  const fallbackSpeech = () => {
    if (!('speechSynthesis' in window)) {
      setLoading(false);
      setPlaying(false);
      return;
    }
    
    // Annuler proprement toute lecture en cours
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    }
    
    const speechText = arabicText || text;
    const utterance = new SpeechSynthesisUtterance(speechText);
    
    const voices = window.speechSynthesis.getVoices();
    const hasArabicChars = /[\u0600-\u06FF]/.test(speechText);
    const targetPrefix = hasArabicChars ? 'ar' : 'fr';
    
    // Rechercher les meilleures voix naturelles disponibles
    const bestVoice = voices.find(v => v.lang.startsWith(targetPrefix) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Siri') || v.name.includes('Premium')))
                   || voices.find(v => v.lang.startsWith(targetPrefix));
                   
    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = bestVoice.lang;
    } else {
      utterance.lang = hasArabicChars ? 'ar-SA' : 'fr-FR';
    }
    
    utterance.rate = 0.9;
    
    // Timeout de sécurité : garantit que le bouton arrête de clignoter en orange même sur Safari iOS/Chrome en cas de bug
    const safetyTimeout = setTimeout(() => {
      setPlaying(false);
      setLoading(false);
    }, Math.max(3000, speechText.length * 180));
    
    utterance.onstart = () => {
      setLoading(false);
      setPlaying(true);
    };
    
    utterance.onend = () => {
      clearTimeout(safetyTimeout);
      setPlaying(false);
      setLoading(false);
    };
    
    utterance.onerror = () => {
      clearTimeout(safetyTimeout);
      setPlaying(false);
      setLoading(false);
    };
    
    // Un délai de 50ms est indispensable pour contourner le bug Chrome/Safari où un cancel() bloque le speak() suivant
    setTimeout(() => {
      try {
        window.speechSynthesis.speak(utterance);
        setPlaying(true);
        setLoading(false);
      } catch (err) {
        clearTimeout(safetyTimeout);
        setPlaying(false);
        setLoading(false);
      }
    }, 50);
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1',
    md: 'p-2 text-sm gap-1.5',
    lg: 'p-3 text-base gap-2'
  }[size];

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }[size];

  return (
    <button
      onClick={playAudio}
      disabled={loading}
      title="Écouter la prononciation"
      className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ${
        playing
          ? 'bg-amber-500 text-white shadow-md animate-pulse'
          : loading
          ? 'bg-stone-200 text-stone-500 cursor-wait'
          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow active:scale-95'
      } ${sizeClasses} ${className}`}
    >
      {loading ? (
        <Loader2 className={`${iconSizes} animate-spin`} />
      ) : playing ? (
        <Volume2 className={`${iconSizes}`} />
      ) : (
        <Volume2 className={`${iconSizes}`} />
      )}
      {label && <span>{label}</span>}
    </button>
  );
};
