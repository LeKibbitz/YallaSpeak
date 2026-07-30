# TODO — YallaSpeak

- [x] Renommer YallahSpeak en YallaSpeak partout (09b7bb5)
- [x] Mode Studio Doublage : shadowing, timeline, boucle, superposition des deux prises (6f0943d)
- [x] Architecture multi-langues : registre LANGUAGES/SCRIPTS, langue dérivée de la variante, zéro migration (45259c9)
- [x] Pack italien : 48 items, variantes romanesco/napolitain/milanais, voix TTS whitelistées (45259c9)
- [x] Recharger les crédits Gemini prépayés (10 € le 30/07, auto-reload 10 € sous 1 €, max 1x/mois)
- [ ] Pré-générer le cache TTS italien : 96/228 clips faits le 30/07 (coût mesuré : 0,12 €). Bloqué par le quota Tier 1 de 100 requêtes/jour sur gemini-3.1-flash-tts (reset ~09h heure FR). Relancer `node .tmp/pregen-tts.cjs` (script : `scripts/pregen-tts.ts`) : les clips en cache passent instantanément, il reste 2 fenêtres quotidiennes (100 + 32)
- [ ] Prochains packs non-latins (groupe prioritaire phonetic-first) : thaï, mandarin, japonais, russe
- [ ] Packs latins suivants : espagnol
