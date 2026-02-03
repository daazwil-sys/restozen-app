# 🧪 Guide de test RestoZen MVP

## Test rapide en 5 minutes

### 1. Lancer l'application
```bash
cd /home/claude/restozen
npm run dev
```

### 2. Tester la page démo
✅ Ouvrir : http://localhost:3000

**Vérifier :**
- [ ] La page se charge rapidement
- [ ] Les couleurs sont bien vertes (#1F9D55)
- [ ] Le texte est en français
- [ ] Les sections s'affichent correctement
- [ ] Le bouton "Voir le formulaire" fonctionne

### 3. Tester le formulaire de commande
✅ Ouvrir : http://localhost:3000/commande

**Scénario de test :**

**Données à saisir :**
- Nom : `Amadou Diop`
- Plat : `Thiébou dieune + jus de bissap`
- Quartier : `Plateau`
- Téléphone : `77 123 45 67`
- Instructions : `Sans piment, livraison devant la pharmacie`

**Vérifier :**
- [ ] Le formulaire est lisible sur mobile (tester en réduisant la fenêtre)
- [ ] Les champs obligatoires sont marqués avec *
- [ ] Le dropdown des quartiers fonctionne
- [ ] Tous les quartiers de Dakar sont présents
- [ ] Le bouton change de texte pendant l'envoi
- [ ] La page de confirmation s'affiche après soumission
- [ ] Le numéro de téléphone est affiché sur la confirmation
- [ ] Le bouton "nouvelle commande" remet le formulaire à zéro

### 4. Test responsive (mobile)

**Sur téléphone ou en mode responsive :**
- [ ] Le formulaire prend toute la largeur
- [ ] Les boutons sont assez grands pour être cliqués
- [ ] Le texte est lisible sans zoom
- [ ] Les champs sont empilés verticalement
- [ ] Pas de scroll horizontal

### 5. Test de performance

**Ouvrir les DevTools → Network :**
- [ ] Le chargement initial < 2 secondes
- [ ] Pas d'erreurs dans la console
- [ ] Les images (si présentes) se chargent

---

## Tests avec un vrai restaurateur

### Préparation
1. Déployer sur Vercel (voir DEPLOYMENT.md)
2. Obtenir l'URL de production
3. Tester sur téléphone réel

### Script de présentation (30 secondes)

**Dire au restaurateur :**

> "Bonjour, je vous montre une solution simple pour mieux organiser vos commandes WhatsApp pendant les heures de pointe.
> 
> Quand vous êtes débordé, au lieu de gérer 30 messages en même temps, vous redirigez les clients vers ce lien.
> 
> Ils remplissent ce formulaire, et toutes leurs commandes arrivent bien organisées."

**Montrer le formulaire sur le téléphone**

### Questions à poser

1. **"Est-ce que c'est clair ?"**
   - Si non → noter ce qui n'est pas compris

2. **"Seriez-vous prêt à utiliser ça aux heures de pointe ?"**
   - Noter la réaction spontanée

3. **"Qu'est-ce qui vous manque ?"**
   - Noter les fonctionnalités demandées

4. **"Si c'était 5 000 FCFA par mois, vous diriez oui ?"**
   - Mesurer l'intérêt réel

### Indicateurs de succès

✅ **Validation forte** si :
- Le restaurateur comprend en < 30 secondes
- Il demande "comment je l'installe ?"
- Il parle d'un problème qu'il a vécu aujourd'hui
- Il veut tester dès maintenant

⚠️ **Validation faible** si :
- Il dit "c'est intéressant" mais ne pose pas de questions
- Il demande plein de fonctionnalités supplémentaires
- Il compare à une autre solution complexe

❌ **Pas de validation** si :
- Il ne comprend pas l'utilité
- Il dit "je n'ai pas ce problème"
- Il trouve ça trop compliqué

---

## Tests techniques (avant déploiement)

### Checklist de pré-production

```bash
# Build de production
npm run build

# Vérifier qu'il n'y a pas d'erreurs
# Toutes les pages doivent se compiler sans warnings critiques
```

**Vérifier :**
- [ ] Le build passe sans erreur
- [ ] Pas de warnings TypeScript bloquants
- [ ] Les routes sont toutes générées (/demo, /commande)

---

## Bugs connus et limitations MVP

### Limitations acceptées pour le MVP
- ❌ Les commandes ne sont pas sauvegardées (pas de backend)
- ❌ Pas de dashboard pour voir les commandes
- ❌ Pas d'authentification
- ❌ Pas de notifications

### Ces limitations seront résolues en Phase 2
Une fois que 5 restaurants valident le formulaire.

---

## Prochaine étape si tests OK

Si les tests sont positifs :
1. ✅ Configurer Supabase (30 min)
2. ✅ Connecter le formulaire à la DB
3. ✅ Créer le dashboard restaurateur
4. ✅ Installer chez 3 restaurants pilotes

---

**Tests réussis = MVP validé = GO pour Phase 2 🚀**
