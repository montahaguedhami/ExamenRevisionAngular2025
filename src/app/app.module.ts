/**
 * MODULE PRINCIPAL DE L'APPLICATION ANGULAR
 * 
 * Le AppModule est le module racine de l'application Angular.
 * Il déclare tous les composants, directives et pipes de l'application,
 * et importe les modules nécessaires (routing, forms, HTTP, etc.)
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Pour les formulaires template-driven (ngModel)
import { RouterModule } from '@angular/router'; // Pour la navigation entre les pages
import { AppRoutingModule } from './app-routing.module'; // Configuration des routes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeequipeComponent } from './listeequipe/listeequipe.component';
import { ListeMatchsComponent } from './listematchs/listematchs.component';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; // Pour les appels HTTP (API REST)
import { UpdateScoreMatchComponent } from './update-score-match/update-score-match.component';

@NgModule({
  // declarations : Liste tous les composants, directives et pipes de ce module
  declarations: [
    AppComponent,              // Composant racine de l'application
    NavbarComponent,           // Barre de navigation
    ListeequipeComponent,     // Liste des équipes
    ListeMatchsComponent,      // Liste des matchs
    MatchComponent,            // Formulaire d'ajout de match
    HomeComponent,             // Page d'accueil
    FooterComponent,           // Pied de page
    UpdateScoreMatchComponent, // Modification du score d'un match
  ],
  
  // imports : Modules Angular nécessaires pour cette application
  imports: [
    BrowserModule,        // Module de base pour les applications Angular dans le navigateur
    AppRoutingModule,     // Module de routing (navigation entre les pages)
    RouterModule,         // Module pour utiliser routerLink et router-outlet
    FormsModule,          // Module pour les formulaires (ngModel, ngForm)
    HttpClientModule      // Module pour faire des requêtes HTTP (GET, POST, PUT, DELETE)
  ],
  
  // providers : Services disponibles dans toute l'application (injection de dépendances)
  providers: [],
  
  // bootstrap : Composant racine qui sera chargé au démarrage de l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
