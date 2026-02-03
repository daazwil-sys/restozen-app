# 🍽️ RestoZen - Les heures de pointe sans stress

## 🎯 Concept

RestoZen est une solution simple pour aider les restaurants à Dakar à mieux gérer leurs commandes WhatsApp pendant les heures de pointe (12h-14h et 19h-22h).

### Problème résolu
- Trop de messages WhatsApp en même temps
- Commandes mal comprises ou oubliées
- Stress permanent aux heures de pointe

### Solution
Un formulaire de commande simple qui :
- Collecte les commandes de manière structurée
- Organise toutes les informations clairement
- Réduit les erreurs et le stress

---

## 🚀 Installation rapide

```bash
# Cloner le projet
git clone [URL]
cd restozen

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📁 Structure du projet

```
restozen/
├── app/
│   ├── commande/          # Page formulaire de commande
│   │   └── page.tsx
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil (redirection)
│   └── globals.css        # Styles globaux
├── components/
│   └── ui/                # Composants réutilisables
│       ├── button.tsx
│       ├── input.tsx
│       └── select.tsx
└── lib/
    └── utils.ts           # Utilitaires
```

---

## 🎨 Charte graphique

### Couleurs
- **Vert Zen** (principal) : `#1F9D55` - Calme, confiance
- **Blanc chaud** (fond) : `#F9FAF7` - Clarté, simplicité
- **Gris foncé** (texte) : `#333333` - Lisibilité
- **Jaune chaud** (CTA) : `#F4C430` - Action, appétit

### Typographie
- **Titres** : Poppins (arrondie, moderne)
- **Texte** : Inter (lisible, confortable)

---

## 🔧 Prochaines étapes (MVP complet)

### Phase 1 - Formulaire de commande ✅
- [x] Design mobile-first
- [x] Formulaire 5 champs
- [x] Validation
- [x] Page de confirmation

### Phase 2 - Backend (à venir)
- [ ] Connexion Supabase
- [ ] Stockage des commandes
- [ ] API endpoints

### Phase 3 - Dashboard restaurateur (à venir)
- [ ] Authentification
- [ ] Liste des commandes en temps réel
- [ ] Marquage "traité"
- [ ] Statistiques simples

### Phase 4 - Intégration WhatsApp (à venir)
- [ ] Message automatique configuré
- [ ] Redirection vers formulaire
- [ ] Notifications WhatsApp

---

## 💰 Offre commerciale

**Offre Lancement** : 5 000 FCFA / mois
- Message automatique WhatsApp
- Lien de commande personnalisé
- Tableau de commandes

**Offre Pro** : 10 000 FCFA / mois
- Tout l'offre Lancement
- Personnalisation du formulaire
- Adaptation aux horaires
- Assistance prioritaire

---

## 🧪 Test en local

Le formulaire est accessible à : `http://localhost:3000/commande`

Testez avec des données fictives :
- Nom : Amadou Diop
- Plat : Thiébou dieune + jus de bissap
- Quartier : Plateau
- Téléphone : 77 123 45 67

---

## 🛠️ Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Base de données** : Supabase (à configurer)
- **Styling** : Tailwind CSS + shadcn/ui
- **Langage** : TypeScript
- **Icônes** : Lucide React

---

## 📝 Notes importantes

- **Mobile-first** : Optimisé pour téléphone (principal canal)
- **100% français** : Interface complète en français
- **Simple** : Aucune complexité inutile
- **Rapide** : Chargement < 2 secondes

---

## 🙋‍♂️ Support

Pour toute question ou suggestion :
- WhatsApp : [À compléter]
- Email : [À compléter]

---

**RestoZen** - Propulsé par ATHENA SERVICES PLUS
