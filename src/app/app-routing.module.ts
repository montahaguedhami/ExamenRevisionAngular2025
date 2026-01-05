/**
 * MODULE DE ROUTING - CONFIGURATION DES ROUTES
 * 
 * Ce module définit toutes les routes de l'application Angular.
 * Une route associe une URL à un composant à afficher.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeequipeComponent } from './listeequipe/listeequipe.component';
import { ListeMatchsComponent } from './listematchs/listematchs.component';
import { MatchComponent } from './match/match.component';
import { UpdateScoreMatchComponent } from './update-score-match/update-score-match.component';

// Définition des routes de l'application
const routes: Routes = [
  { path: '', component: HomeComponent },                                    // Route par défaut (page d'accueil)
  { path: 'equipes', component: ListeequipeComponent },                   // /equipes -> Liste des équipes
  { path: 'listematchs', component: ListeMatchsComponent },                 // /listematchs -> Liste des matchs
  { path: 'add-match', component: MatchComponent },                        // /add-match -> Formulaire d'ajout de match
  { path: 'listematchs/updatescore/:id', component: UpdateScoreMatchComponent } // /listematchs/updatescore/1 -> Modification du score (id est un paramètre)
];

@NgModule({
  // RouterModule.forRoot() : Configure le routing au niveau racine de l'application
  imports: [RouterModule.forRoot(routes)],
  
  // Export RouterModule pour que les autres modules puissent utiliser routerLink et router-outlet
  exports: [RouterModule]
})
export class AppRoutingModule {}
