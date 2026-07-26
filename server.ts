import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy Gemini client helper
function getAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("La clé API Gemini (GEMINI_API_KEY) n'est pas configurée dans les secrets.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "methode-arabe-quotidien" });
});

// Endpoint: AI Coach Dialectal (Sidi Hakim) - Questions, Slang, Traductions express
app.post("/api/gemini/coach", async (req, res) => {
  try {
    const { prompt, dialect, situation } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Le prompt est requis." });
    }

    const ai = getAiClient();
    const systemInstruction = `Tu es "Sidi Hakim", un coach natif passionné par l'apprentissage ultra-rapide de l'arabe PARLÉ au quotidien (Arabe Dialectal).
RÈGLE D'OR : Tu refuses catégoriquement d'enseigner l'arabe littéraire complexe (Fusha) ou la grammaire scolaire ennuyeuse. Tu te concentres à 100% sur l'arabe de la rue, des cafés, du business quotidien, des souks et de la convivialité.
Dialecte ciblé par l'élève : ${dialect || "Égyptien (Masri) et Levantin"}.
Contexte/Situation : ${situation || "Général / Conversation quotidienne"}.

Pour chaque réponse ou expression :
1. Donne l'expression en PHONÉTIQUE FRANÇAISE / ARABIZI très claire (pour que le français sache le prononcer tout de suite sans savoir lire l'alphabet arabe).
2. Donne l'écriture en arabe dialectal (en gros plan si possible).
3. Donne la traduction mot-à-mot (pour comprendre la logique) puis la signification réelle en français.
4. Ajoute une "Astuce de prononciation" (ex: comment faire le 'Kh', le 'Ain', ou l'intonation).
5. Sois chaleureux, motivant ("Yalla!", "Habibi!", "Batal!") et concis. Formate avec du Markdown propre et lisible.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ result: response.text });
  } catch (error: any) {
    console.error("Erreur Gemini Coach:", error);
    res.status(500).json({ error: error.message || "Erreur lors de la génération IA" });
  }
});

// Endpoint: Générateur de Situation / Jeu de Rôle Éclair (Roleplay)
app.post("/api/gemini/roleplay", async (req, res) => {
  try {
    const { dialect, scenario, difficulty } = req.body;
    const ai = getAiClient();

    const systemInstruction = `Tu es un créateur de dialogues ultra-réalistes en arabe dialectal quotidien.
L'utilisateur veut une méthode super accélérée pour se débrouiller dans la situation suivante : "${scenario}".
Dialecte : "${dialect}". Niveau : "${difficulty || "Débutant Débrouillard"}".

Génère un dialogue court et percutant de 4 à 6 répliques entre un "Locuteur Natif" et l' "Élève".
Pour CHAQUE réplique, fournis strictement ce format JSON :
{
  "dialogue": [
    {
      "speaker": "Natif" ou "Moi",
      "arabic": "Texte en arabe dialectal",
      "phonetic": "Phonétique française limpide et facile à prononcer",
      "french": "Traduction française",
      "tip": "Astuce ou mot clé à retenir dans cette phrase"
    }
  ],
  "keyVocabulary": [
    {
      "word": "Mot en phonétique",
      "arabic": "Mot en arabe",
      "meaning": "Traduction",
      "context": "Comment l'utiliser"
    }
  ],
  "survivalHack": "Un conseil culturel ou linguistique secret pour impressionner les locaux dans cette situation."
}
Renvoie UNIQUEMENT un JSON valide respectant cette structure.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Créer le dialogue pour le scénario : ${scenario} en arabe ${dialect}.`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.8,
      },
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    res.json(parsed);
  } catch (error: any) {
    console.error("Erreur Gemini Roleplay:", error);
    res.status(500).json({ error: error.message || "Erreur lors du jeu de rôle IA" });
  }
});

// Helper to convert raw PCM audio buffer to valid WAV buffer
function pcmToWav(pcmBuffer: Buffer, sampleRate = 24000, channels = 1, bitsPerSample = 16): Buffer {
  const header = Buffer.alloc(44);
  const dataSize = pcmBuffer.length;
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;

  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

// Cache serveur en mémoire pour les audios TTS (0 ms de latence au second appel)
const serverTtsCache = new Map<string, string>();

// Endpoint: Prononciation vocale naturelle via Gemini TTS
app.post("/api/gemini/tts", async (req, res) => {
  try {
    const { text, arabicText, dialect } = req.body;
    if (!text && !arabicText) {
      return res.status(400).json({ error: "Texte requis pour la prononciation." });
    }

    const cacheKey = `${dialect || "Arabic"}_${text || ""}_${arabicText || ""}`;
    if (serverTtsCache.has(cacheKey)) {
      return res.json({ audioBase64: serverTtsCache.get(cacheKey) });
    }

    const ai = getAiClient();
    const prompt = `Pronounce in ${dialect || "Arabic"} dialect: "${arabicText || text}" (${text})`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Zephyr" },
          },
        },
      },
    });

    const inlineData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    const base64Audio = inlineData?.data;
    if (!base64Audio) {
      return res.status(500).json({ error: "Impossible de générer l'audio TTS." });
    }

    const mimeType = inlineData?.mimeType || "";
    let finalBase64 = base64Audio;

    // Convert raw PCM to WAV so browsers can decode and play it cleanly
    if (mimeType.includes("l16") || mimeType.includes("pcm") || !base64Audio.startsWith("UklG")) {
      const pcmBuf = Buffer.from(base64Audio, "base64");
      const wavBuf = pcmToWav(pcmBuf, 24000, 1, 16);
      finalBase64 = wavBuf.toString("base64");
    }

    if (serverTtsCache.size > 500) {
      const firstKey = serverTtsCache.keys().next().value;
      if (firstKey) serverTtsCache.delete(firstKey);
    }
    serverTtsCache.set(cacheKey, finalBase64);

    res.json({ audioBase64: finalBase64 });
  } catch (error: any) {
    console.error("Erreur Gemini TTS:", error);
    res.status(500).json({ error: error.message || "Erreur de synthèse vocale" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Serveur YallaSpeak démarré sur http://localhost:${PORT}`);
  });
}

startServer();
