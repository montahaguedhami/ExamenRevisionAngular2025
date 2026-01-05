/**
 * COMPOSANT - LISTE DES ÉQUIPES
 * 
 * Ce composant affiche la liste de toutes les équipes.
 * Il charge les données depuis l'API au démarrage.
 */

import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../models/equipe.model';

@Component({
  selector: 'app-listeequipe', // Balise HTML : <app-listeequipe></app-listeequipe>
  templateUrl: './listeequipe.component.html',
  styleUrl: './listeequipe.component.css'
})
export class ListeequipeComponent implements OnInit {
  // Liste des équipes à afficher (initialisée vide)
  equipes: Equipe[] = [];

  // Injection du service pour récupérer les équipes
  constructor(private equipeService: EquipeService) {}

  /**
   * Méthode appelée automatiquement après la création du composant
   * On charge ici toutes les équipes depuis l'API
   */
  ngOnInit(): void {
    // Appel HTTP GET pour récupérer toutes les équipes
    this.equipeService.getEquipes().subscribe((data: Equipe[]) => {
      this.equipes = data; // Stockage des équipes dans la propriété du composant
    });
  }
}
