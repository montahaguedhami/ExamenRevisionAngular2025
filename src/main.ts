/**
 * POINT D'ENTRÉE DE L'APPLICATION ANGULAR
 * 
 * Ce fichier est le premier fichier exécuté lors du démarrage de l'application.
 * Il démarre l'application Angular en chargeant le module racine (AppModule).
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Démarrage de l'application Angular
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true // Optimisation : regroupe les événements pour améliorer les performances
})
  // Gestion des erreurs au démarrage
  .catch(err => console.error(err));
