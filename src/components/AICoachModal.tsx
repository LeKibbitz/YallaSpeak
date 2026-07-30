import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, Send, Sparkles, Loader2, Volume2, User, HelpCircle, Flame } from 'lucide-react';
import { DialectId, AICoachMessage } from '../types';
import { DIALECTS } from '../data/dialects';
import { AudioPlayerButton } from './AudioPlayerButton';
import { DIALECT_TTS_NAMES } from '../lib/audio';
import { Markdown } from '../lib/markdown';

interface AICoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDialect: DialectId;
}

export const AICoachModal: React.FC<AICoachModalProps> = ({
  isOpen,
  onClose,
  selectedDialect
}) => {
  const [messages, setMessages] = useState<AICoachMessage[]>([
    {
      id: '1',
      sender: 'hakim',
      text: `Yalla Habibi ! Je suis **Sidi Hakim**, ton coach dialectal 100% rue et quotidien. ☕
Pas de grammaire littéraire ennuyeuse ici ! Demande-moi **n'importe quelle phrase**, argot, ou situation en français, et je te donnerai la formule magique en **${DIALECTS[selectedDialect].name}** avec la prononciation facile !
*Exemples : "Comment dire 'arrête de te la raconter' en égyptien ?", "Comment commander sans oignon au Liban ?", "Que veut dire Wallah ?"*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeSituation, setActiveSituation] = useState('Général / Rue');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentDialectInfo = DIALECTS[selectedDialect];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const queryToSend = customQuery || input;
    if (!queryToSend.trim() || loading) return;

    const userMsg: AICoachMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customQuery) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: queryToSend,
          dialect: DIALECT_TTS_NAMES[selectedDialect],
          situation: activeSituation
        })
      });

      if (response.status === 429) throw new Error("RATE_LIMIT");
      if (!response.ok) throw new Error("Erreur de communication avec Sidi Hakim");
      const data = await response.json();

      const aiMsg: AICoachMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'hakim',
        text: data.result || "Désolé Habibi, j'ai eu une petite interruption. Répète ta question s'il te plaît !",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error("Erreur coach:", err);
      const errMsg: AICoachMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'hakim',
        text:
          err instanceof Error && err.message === "RATE_LIMIT"
            ? "☕ Doucement Habibi ! Tu poses trop de questions d'un coup. Laisse-moi souffler une minute et reviens."
            : "🚨 Oups, ma connexion au café du souk a sauté ! Vérifie ta connexion ou réessaie dans un instant Habibi.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const quickQuestions = [
    "Comment dire 'Laisse tomber / Pas de souci' ?",
    "Comment faire un compliment à quelqu'un ?",
    "Comment dire 'Je suis pressé' au chauffeur de taxi ?",
    "Quelle est la différence entre Habibi et Ya Zalami ?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-stone-900 border border-stone-700 rounded-3xl max-w-3xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-stone-950 p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white">Sidi Hakim</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Coach IA Actif
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
                <span>Dialecte ciblé : <strong className="text-accent">{currentDialectInfo.name.split(' ')[0]} {currentDialectInfo.flag}</strong></span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Situation Context Selector */}
        <div className="bg-stone-950/60 px-4 py-2 border-b border-stone-800 flex items-center gap-2 text-xs overflow-x-auto no-scrollbar shrink-0">
          <span className="text-stone-400 font-bold shrink-0">Contexte :</span>
          {['Général / Rue', 'Café & Resto', 'Taxi / Urgence', 'Négociation Souk', 'Amour / Amitié'].map((sit) => (
            <button
              key={sit}
              onClick={() => setActiveSituation(sit)}
              className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeSituation === sit
                  ? 'bg-accent text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {sit}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isHakim = msg.sender === 'hakim';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isHakim ? 'justify-start' : 'justify-end'} animate-fadeIn`}
              >
                {isHakim && (
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 shadow mt-1">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-xl rounded-2xl p-4 sm:p-5 shadow-sm text-sm sm:text-base leading-relaxed ${
                    isHakim
                      ? 'bg-stone-950 border border-stone-800 text-stone-200 rounded-tl-none'
                      : 'bg-gradient-to-r from-accent to-accent/80 text-stone-950 font-medium rounded-tr-none shadow-md shadow-accent/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1 pb-1 border-b border-stone-800/40 text-[10px] opacity-70 font-semibold">
                    <span>{isHakim ? 'Sidi Hakim (Coach Dialectal)' : 'Moi'}</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  {/* The coach answers in Markdown: render it instead of printing ### and ** */}
                  <div className="font-sans mt-1">
                    <Markdown text={msg.text} />
                  </div>
                </div>

                {!isHakim && (
                  <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center shrink-0 shadow mt-1">
                    <User className="w-5 h-5 text-stone-950 font-bold" />
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center gap-3 text-stone-400 text-sm animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/50 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              </div>
              <span>Sidi Hakim prépare la formule en arabe parlé ({currentDialectInfo.name.split(' ')[0]})...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Question Chips */}
        <div className="px-4 py-2 bg-stone-950/80 border-t border-stone-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[11px] font-bold text-accent shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Suggestions :
          </span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(undefined, q)}
              disabled={loading}
              className="bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors border border-stone-700/60"
            >
              "{q}"
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={(e) => handleSend(e)} className="p-4 bg-stone-950 border-t border-stone-800 shrink-0">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              placeholder={`Demande comment dire quelque chose en ${currentDialectInfo.name.split(' ')[0]}...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 bg-stone-900 border border-stone-700 focus:border-emerald-500 rounded-2xl px-4 py-3 text-sm sm:text-base text-white placeholder-stone-500 focus:outline-none shadow-inner"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 text-white font-bold p-3 sm:px-6 sm:py-3 rounded-2xl shadow-lg shadow-emerald-900/40 flex items-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Demander au Coach</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
