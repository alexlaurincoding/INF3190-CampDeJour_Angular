# INF3190TP3

Ce projet est généré avec [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## EQUIPE

### Membres

**Etienne Comtois** : COME17029800  
**Louis Roy Therrien** : ROYL20059103  
**Alexandre Laurin** : LAUA23108205  
**Mathieu Charbonneau** : CHAM25029407


### Administrateur

_Pour simuler une connection en tant qu'administrateur, authentifiez-vous à l'aide du nom d'utilisateur :_ `admin` et du mot de passe `admin!`  
La gestion se divise en 2 sections.

- L'une permet la gestion des sessions, programmes, activités et types et blocs d'activité.
- L'autre section donne accès à toutes les inscriptions et les comptes d'utilisateurs.

### BASE DE DONNÉE
Les données sont stockés dans des fichiers json pour la démonstration. Les identifiants de connexion pour tester les comptes parents sont dans `data/fiches-parents.ts`.
Par exemple, pour Homer Simpson, le nom d'utilisateur est `homer` et le mot de passe est `beignes!`.

### Journalisation
Les logs sont envoyés à une base de données noSql sur Firebase, puisque nous n'avons pas de serveur backend.
Pour tester les logs, vous pouvez créer un projet Firebase et une "Realtime Database". Il suffit de modifier l'url dans le LoggerService pour mettre celui de votre projet de test et ajouter `logs.json` à la fin de l'url.
![Firebase](src/assets/img/capture.png)


### Serveur de développement

Exécuter `ng serve` Pour obtenir un serveur de développement. Allez à `http://localhost:4200/`. L'application recharge tout seule si le code source est changé.

### Build

Exécuter `ng build` pour construire le projet. Les fichiers du build seront dans `dist/`.
