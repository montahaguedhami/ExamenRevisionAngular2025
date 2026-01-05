/**
 * COMPOSANT - LISTE DES MATCHS
 * 
 * Ce composant affiche la liste de tous les matchs.
 * Il charge les données depuis l'API au démarrage.
 */

import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match.model';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-liste-matchs', // Balise HTML : <app-liste-matchs></app-liste-matchs>
  templateUrl: './listematchs.component.html',
  styleUrl: './listematchs.component.css'
})
export class ListeMatchsComponent implements OnInit {
  // Liste des matchs à afficher (initialisée vide)
  matchs: Match[] = [];

  // Injection du service pour récupérer les matchs
  constructor(private matchService: MatchService) {}

  /**
   * Méthode appelée automatiquement après la création du composant
   * On charge ici tous les matchs depuis l'API
   */
  ngOnInit(): void {
    // Appel HTTP GET pour récupérer tous les matchs
    this.matchService.getMatchs().subscribe({
      // next : Exécuté en cas de succès
      next: (data: Match[]) => {
        this.matchs = data; // Stockage des matchs dans la propriété du composant
        console.log('Matchs chargés:', this.matchs); // Debug : vérifier que les matchs sont bien chargés
      },
      // error : Exécuté en cas d'erreur (serveur non démarré, erreur réseau, etc.)
      error: (error) => {
        console.error('Erreur lors du chargement des matchs:', error);
        console.error('Détails de l\'erreur:', error.message || error);
      }
    });
  }
}
