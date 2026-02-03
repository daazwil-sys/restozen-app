# 🚀 Guide de déploiement RestoZen

## Déploiement sur Vercel (Recommandé - Gratuit)

### 1. Prérequis
- Compte GitHub
- Compte Vercel (gratuit)
- Code poussé sur GitHub

### 2. Étapes de déploiement

1. **Push sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit - RestoZen MVP"
git remote add origin [URL_DE_VOTRE_REPO]
git push -u origin main
```

2. **Déployer sur Vercel**
- Aller sur [vercel.com](https://vercel.com)
- Cliquer sur "Import Project"
- Sélectionner votre repo GitHub
- Vercel détecte automatiquement Next.js
- Cliquer sur "Deploy"

3. **Configuration des variables d'environnement** (si Supabase configuré)
Dans les settings Vercel :
```
NEXT_PUBLIC_SUPABASE_URL=votre_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle
```

### 3. URL finale
Votre app sera accessible à : `https://restozen.vercel.app` (ou votre domaine custom)

---

## Configuration Supabase (Base de données)

### 1. Créer un projet Supabase
- Aller sur [supabase.com](https://supabase.com)
- Créer un nouveau projet
- Nom : "RestoZen"
- Région : la plus proche (Europe West par exemple)

### 2. Créer la table `commandes`

Dans l'éditeur SQL de Supabase :

```sql
-- Création de la table commandes
create table commandes (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  nom text not null,
  plat text not null,
  quartier text not null,
  telephone text not null,
  instructions text,
  statut text default 'en_attente' not null,
  restaurant_id uuid
);

-- Activer Row Level Security
alter table commandes enable row level security;

-- Politique pour permettre l'insertion publique (formulaire)
create policy "Permettre insertion publique"
on commandes for insert
to anon
with check (true);

-- Politique pour lecture (authentifié uniquement)
create policy "Lecture pour utilisateurs authentifiés"
on commandes for select
to authenticated
using (true);
```

### 3. Récupérer les clés
- Project Settings → API
- Copier `Project URL` et `anon public`
- Ajouter dans `.env.local`

---

## Personnalisation pour un restaurant

### Modifier les quartiers
Fichier : `app/commande/page.tsx`

```typescript
const quartiers = [
  "Quartier 1",
  "Quartier 2",
  // ... vos quartiers
]
```

### Modifier les couleurs
Fichier : `tailwind.config.js`

```javascript
primary: {
  DEFAULT: "#1F9D55", // Votre couleur
}
```

---

## Intégration WhatsApp Business

### Message automatique
Dans WhatsApp Business → Paramètres → Outils professionnels → Message d'absence :

**Texte recommandé :**
```
🔥 Heures de pointe
Merci de commander ici 👉 https://votre-lien.vercel.app/commande

Nous traiterons votre commande rapidement !
```

**Horaires actifs :**
- Lundi-Dimanche : 12h-14h et 19h-22h

---

## Support technique

### Problèmes courants

**Le site ne se charge pas**
- Vérifier les logs Vercel
- Vérifier la connexion Supabase

**Les commandes ne s'enregistrent pas**
- Vérifier les variables d'environnement
- Vérifier les politiques RLS Supabase

**Le formulaire est lent**
- Optimiser les images
- Activer le cache Vercel

---

## Coûts

- **Vercel** : Gratuit jusqu'à 100GB bandwidth/mois
- **Supabase** : Gratuit jusqu'à 500MB database
- **Domaine custom** : ~10 000 FCFA/an (optionnel)

👉 **Total pour démarrer : 0 FCFA**

---

## Checklist avant lancement

- [ ] Code testé en local
- [ ] Repo GitHub créé
- [ ] Déployé sur Vercel
- [ ] Supabase configuré
- [ ] Variables d'environnement ajoutées
- [ ] Table `commandes` créée
- [ ] Message WhatsApp Business configuré
- [ ] Testé le formulaire en production
- [ ] Quartiers personnalisés
- [ ] Contact/support ajouté

---

**Temps estimé de déploiement complet : 30-45 minutes**
