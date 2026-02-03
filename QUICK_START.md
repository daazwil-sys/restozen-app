# 🚀 RESTOZEN - DÉMARRAGE RAPIDE

## 📦 Tu as reçu : restozen_mvp.tar.gz

---

## ⚡ Installation en 3 commandes

```bash
# 1. Décompresser
tar -xzf restozen_mvp.tar.gz
cd restozen

# 2. Installer
npm install

# 3. Lancer
npm run dev
```

**Ouvrir dans le navigateur :** http://localhost:3000

---

## 🎯 Ce qui est prêt

✅ **Formulaire de commande** (`/commande`)
- Design mobile-first
- 5 champs : nom, plat, quartier, téléphone, instructions
- Page de confirmation
- Couleurs RestoZen (#1F9D55)

✅ **Page de démo** (`/demo`)
- Landing page complète
- Présentation problème/solution
- Tarifs affichés
- CTA vers formulaire

✅ **Documentation**
- `README.md` - Vue d'ensemble
- `DEPLOYMENT.md` - Guide déploiement Vercel
- `TESTING.md` - Comment tester
- `MVP_STATUS.md` - État d'avancement
- `PRESENTATION.md` - Présentation complète

---

## 🧪 Test rapide (2 minutes)

1. Lancer `npm run dev`
2. Ouvrir http://localhost:3000/commande
3. Remplir le formulaire :
   - Nom : Amadou Diop
   - Plat : Thiébou dieune
   - Quartier : Plateau
   - Téléphone : 77 123 45 67
4. Cliquer "Envoyer"
5. Vérifier la page de confirmation

---

## 📱 Test sur téléphone

**Option 1 : Tunnel local (ngrok)**
```bash
# Installer ngrok
npm install -g ngrok

# Dans un autre terminal
ngrok http 3000

# Partager l'URL https://xxx.ngrok.io
```

**Option 2 : Déployer sur Vercel (gratuit)**
Voir `DEPLOYMENT.md`

---

## 🎨 Personnalisation rapide

### Changer les quartiers
**Fichier :** `app/commande/page.tsx`  
**Ligne :** ~25

```typescript
const quartiers = [
  "Ton quartier 1",
  "Ton quartier 2",
  // ...
]
```

### Changer les couleurs
**Fichier :** `tailwind.config.js`  
**Ligne :** ~16

```javascript
primary: {
  DEFAULT: "#1F9D55", // Ta couleur ici
}
```

---

## 🚀 Déploiement Production (15 min)

### Sur Vercel (gratuit)

1. **Push sur GitHub**
```bash
git init
git add .
git commit -m "RestoZen MVP"
git remote add origin [TON_REPO]
git push -u origin main
```

2. **Déployer sur Vercel**
- Aller sur vercel.com
- Import Project → GitHub
- Sélectionner le repo
- Deploy

3. **Récupérer l'URL**
Tu auras une URL type : `restozen.vercel.app`

---

## 🔗 Prochaine étape

### Si le formulaire te plaît :

1. **Configurer Supabase** (30 min)
   - Voir `DEPLOYMENT.md` section Supabase
   - Créer la table `commandes`
   - Connecter au formulaire

2. **Tester avec 3 restos pilotes**
   - Leur montrer le formulaire
   - Recueillir feedback
   - Ajuster si besoin

3. **Créer le dashboard** (Phase 2)
   - Pour voir les commandes
   - Marquer "traité"
   - Voir les stats

---

## 📞 Structure du projet

```
restozen/
├── app/
│   ├── commande/     ← Formulaire principal
│   ├── demo/         ← Landing page
│   └── layout.tsx
├── components/ui/    ← Boutons, inputs, etc.
├── lib/             ← Utilitaires
└── docs/            ← Documentation
```

---

## 💡 Problèmes courants

**"npm: command not found"**
→ Installer Node.js (nodejs.org)

**"Port 3000 déjà utilisé"**
→ `npm run dev -- -p 3001`

**"Module not found"**
→ `rm -rf node_modules && npm install`

---

## ✅ Checklist avant montrer aux clients

- [ ] Testé en local
- [ ] Testé sur mobile (responsive)
- [ ] Quartiers personnalisés
- [ ] Déployé sur Vercel
- [ ] URL partageable prête

---

**Tu es prêt ! 🚀**

Toute la documentation est dans les fichiers .md du projet.

**Questions ?** Lis `README.md` puis `DEPLOYMENT.md`
