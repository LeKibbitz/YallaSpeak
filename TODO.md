# TODO — YallaSpeak

- [x] Renommer YallahSpeak en YallaSpeak partout (09b7bb5)
- [x] Mode Studio Doublage : shadowing, timeline, boucle, superposition des deux prises (6f0943d)
- [x] Architecture multi-langues : registre LANGUAGES/SCRIPTS, langue dérivée de la variante, zéro migration (45259c9)
- [x] Pack italien : 48 items, variantes romanesco/napolitain/milanais, voix TTS whitelistées (45259c9)
- [x] Recharger les crédits Gemini prépayés (10 € le 30/07, auto-reload 10 € sous 1 €, max 1x/mois)
- [x] Pack mandarin : 52 items, accents standard/pékinois/taïwanais/dongbei, marque ZouSpeak (走吧), pinyin à tons + hanzi (eb1fdfd)
- [ ] Pré-générer le cache TTS italien + mandarin : 108/440 clips en cache au 30/07 (coût mesuré : ~0,12 €/100 clips). Quota Tier 1 : 100 générations/jour sur gemini-3.1-flash-tts, reset ~09h heure FR, non reportable. Relancer chaque matin `cd ~/projects/YallaSpeak && node .tmp/pregen-tts.cjs` (rebuild : `npx esbuild scripts/pregen-tts.ts --bundle --platform=node --outfile=.tmp/pregen-tts.cjs`). Le script enchaîne les packs et draine 100 générations par fenêtre : ~4 matinées restantes (31/07 → 03/08)
- [ ] Prochains packs non-latins (groupe prioritaire phonetic-first) : thaï, japonais, russe
- [ ] Packs latins suivants : espagnol
