# Guide de démarrage - Application Angular

## Problèmes courants et solutions

### 1. Les équipes ne s'affichent pas dans le formulaire d'ajout

**Cause probable :** Le serveur json-server n'est pas démarré.

**Solution :**
1. Ouvrez un terminal dans le dossier du projet
2. Exécutez la commande :
   ```bash
   npx json-server --watch db.json
   ```
3. Le serveur doit démarrer sur `http://localhost:3000`
4. Vérifiez dans la console du navigateur (F12) s'il y a des erreurs HTTP

### 2. La liste des matchs ne s'affiche pas

**Causes possibles :**
- Le serveur json-server n'est pas démarré (voir solution ci-dessus)
- Erreur de connexion à l'API (vérifier la console du navigateur)

**Solution :**
1. Vérifiez que json-server est démarré
2. Ouvrez la console du navigateur (F12)
3. Regardez les messages "Matchs chargés:" dans la console
4. Vérifiez s'il y a des erreurs HTTP (404, CORS, etc.)

### 3. Comment vérifier que tout fonctionne

1. **Démarrer json-server :**
   ```bash
   npx json-server --watch db.json
   ```

2. **Démarrer l'application Angular :**
   ```bash
   npm start
   ```

3. **Vérifier dans la console du navigateur (F12) :**
   - Messages "Équipes chargées:" avec la liste des équipes
   - Messages "Matchs chargés:" avec la liste des matchs
   - Aucune erreur HTTP (404, 500, CORS, etc.)

### 4. Commandes utiles

```bash
# Démarrer json-server
npx json-server --watch db.json

# Démarrer l'application Angular (dans un autre terminal)
npm start

# Builder l'application
npm run build
```

### 5. Ports utilisés

- **Angular :** http://localhost:4200
- **json-server :** http://localhost:3000

Assurez-vous que ces ports ne sont pas utilisés par d'autres applications.

