# Deploiement YallaSpeak

Cible : VPS `vps-user` (tj-vps, 100.127.212.51), Docker + nginx, domaine
`yallaspeak.lekibbitz.fr`.

## Prerequis (une seule fois)

1. **Cle Gemini facturee.** Le palier gratuit plafonne le modele TTS a
   **10 requetes par jour** : l'app est inutilisable en ligne sans facturation
   activee sur le projet Google Cloud. Voir `../AUDIT.md`.

2. **Secret sur le VPS**, jamais dans l'image ni dans git :

   ```bash
   ssh vps-user 'mkdir -p ~/apps/yallaspeak'
   ssh vps-user 'cat > ~/apps/yallaspeak/.env' <<'EOF'
   GEMINI_API_KEY=...
   APP_URL=https://yallaspeak.lekibbitz.fr
   HOST_PORT=3021
   EOF
   ssh vps-user 'chmod 600 ~/apps/yallaspeak/.env'
   ```

3. **DNS** : fait le 26/07/2026. La zone `lekibbitz.fr` est deleguee a Vercel
   (`ns1/ns2.vercel-dns.com`), pas a Hostinger. L'enregistrement a ete cree
   avec le CLI Vercel, comme les autres sous-domaines du VPS :

   ```bash
   vercel dns add lekibbitz.fr yallaspeak A 148.230.117.35
   ```

   Attention : un wildcard `*.lekibbitz.fr` pointe vers Vercel, donc tout
   sous-domaine sans enregistrement explicite atterrit chez Vercel et non sur
   le VPS. Un enregistrement A dedie est obligatoire.

4. **Zone de cache nginx**, a declarer dans le contexte `http` (par exemple
   `/etc/nginx/conf.d/yallaspeak-cache.conf`) :

   ```nginx
   proxy_cache_path /var/cache/nginx/yallaspeak_tts levels=1:2
       keys_zone=yallaspeak_tts:10m max_size=2g inactive=30d use_temp_path=off;
   ```

5. **Vhost et certificat** :

   ```bash
   sudo cp nginx-yallaspeak.conf /etc/nginx/sites-available/yallaspeak
   sudo ln -sf /etc/nginx/sites-available/yallaspeak /etc/nginx/sites-enabled/
   sudo certbot --nginx -d yallaspeak.lekibbitz.fr
   sudo nginx -t && sudo systemctl reload nginx
   ```

## Deployer

```bash
./deploy/deploy.sh
```

Le script verifie les types, build, synchronise, reconstruit l'image et
interroge `/api/health`.

## Prechauffer l'audio

Une fois en ligne, remplir le cache audio de tout le contenu statique
(185 phrases). Chaque phrase generee une fois n'est plus jamais redemandee
au fournisseur :

```bash
BASE=https://yallaspeak.lekibbitz.fr npx tsx tools/warm-tts.ts
```

Le cache vit dans le volume Docker `tts-cache`, il survit aux redeploiements.

## Verifier

```bash
ssh vps-user 'docker compose -f ~/apps/yallaspeak/docker-compose.yml logs -f --tail=50'
curl -s https://yallaspeak.lekibbitz.fr/api/health | python3 -m json.tool
```
