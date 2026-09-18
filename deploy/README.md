# Déploiement sur un VPS Hostinger

Résumé de la procédure complète (Ubuntu 24.04, Node.js 22, PM2, Nginx, HTTPS Let's Encrypt).

1. Serveur : `apt update && apt upgrade`, installer Node.js 22, git, nginx, certbot, ufw.
2. Code : `git clone` du dépôt dans `/var/www/greenplanet`, `npm ci`, `npm run build`.
3. Processus : `pm2 start npm --name greenplanet -- start`, `pm2 save`, `pm2 startup`.
4. Nginx : copier `deploy/nginx.conf` vers `/etc/nginx/sites-available/greenplanet`, activer, `nginx -t`, `systemctl reload nginx`.
5. DNS : enregistrement A du domaine vers l'IP du VPS (hPanel → DNS).
6. HTTPS : `certbot --nginx -d VOTRE-DOMAINE.com -d www.VOTRE-DOMAINE.com`.
7. Mises à jour : `bash deploy/deploy.sh` après chaque `git push`.

Commandes utiles : `pm2 status`, `pm2 logs greenplanet` (les demandes du formulaire de contact y apparaissent
tant que l'envoi d'email n'est pas branché), `pm2 restart greenplanet`.
