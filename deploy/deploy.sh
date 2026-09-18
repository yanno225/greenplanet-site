#!/usr/bin/env bash
# Mise à jour du site sur le VPS : récupère la dernière version, reconstruit, redémarre.
# Usage (sur le serveur) : bash deploy/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

echo "→ Récupération du code"
git pull --ff-only

echo "→ Installation des dépendances"
npm ci

echo "→ Construction de la version de production"
npm run build

echo "→ Redémarrage"
pm2 restart greenplanet --update-env || pm2 start npm --name greenplanet -- start
pm2 save

echo "✓ Déploiement terminé"
