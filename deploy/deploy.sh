#!/usr/bin/env bash
# Deploys YallaSpeak to the VPS: sync the sources, rebuild the image, restart.
# The Gemini key never travels in the image, only in the .env kept on the VPS.
set -euo pipefail

HOST="${HOST:-vps-user}"
REMOTE_DIR="${REMOTE_DIR:-/home/lekibbitz/apps/yallaspeak}"
DOMAIN="${DOMAIN:-yallaspeak.lekibbitz.fr}"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "== 1. Verification locale =="
cd "$LOCAL_DIR"
npm run lint
npm run build

echo "== 2. Synchronisation vers $HOST:$REMOTE_DIR =="
ssh "$HOST" "mkdir -p '$REMOTE_DIR'"
rsync -az --delete \
  --exclude node_modules --exclude dist --exclude .git \
  --exclude .cache --exclude .env --exclude '*.log' \
  "$LOCAL_DIR/" "$HOST:$REMOTE_DIR/"

echo "== 3. Verification du .env distant =="
ssh "$HOST" "test -f '$REMOTE_DIR/.env'" || {
  echo "ERREUR: $REMOTE_DIR/.env absent sur le VPS."
  echo "Creer le fichier avec GEMINI_API_KEY=... (chmod 600), il n'est jamais transfere depuis le Mac."
  exit 1
}

echo "== 4. Build et redemarrage =="
ssh "$HOST" "cd '$REMOTE_DIR' && docker compose up -d --build && docker compose ps"

echo "== 5. Sante =="
ssh "$HOST" "curl -fsS http://127.0.0.1:\${HOST_PORT:-3021}/api/health" && echo
echo "OK. https://$DOMAIN"
