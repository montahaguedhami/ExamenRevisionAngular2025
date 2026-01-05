/**
 * COMPOSANT - AJOUT D'UN MATCH
 * 
 * Ce composant permet de créer un nouveau match.
 * Il contient un formulaire avec validation des données.
 */

import { Router } from '@angular/router';
import { MatchService } from '../services/match.service';
import { EquipeService } from '../services/equipe.service';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match.model';
import { Equipe } from '../models/equipe.model';

@Component({
  selector: 'app-match', // Balise HTML : <app-match></app-match>
  templateUrl: './match.component.html', // Template HTML du composant
  styleUrl: './match.component.css' // Fichier CSS du composant
})
export class MatchComponent implements OnInit {
  // Objet match qui sera rempli par le formulaire
  match: Match = new Match();
  
  // Liste des équipes disponibles (chargée depuis l'API)
  equipes: Equipe[] = [];
  
  // Message d'erreur à afficher en cas de problème
  messageErreur = '';

  // Injection des services nécessaires (injection de dépendances)
  constructor(
    private equipeService: EquipeService,  // Service pour récupérer les équipes
    private matchService: MatchService,    // Service pour créer un match
    private router: Router                 // Service pour la navigation
  ) {}
  
  /**
   * Méthode appelée automatiquement après la création du composant
   * On charge ici la liste des équipes pour les afficher dans le formulaire
   */
  ngOnInit(): void {
    // Récupération asynchrone des équipes depuis l'API
    this.equipeService.getEquipes().subscribe({
      next: (data) => {
        this.equipes = data; // Stockage des équipes dans la propriété du composant
        console.log('Équipes chargées:', this.equipes); // Debug : vérifier que les équipes sont bien chargées
      },
      error: (error) => {
        console.error('Erreur lors du chargement des équipes:', error);
        this.messageErreur = 'Erreur lors du chargement des équipes. Vérifiez que le serveur json-server est démarré (npx json-server --watch db.json)';
      }
    });
  }

  /**
   * Méthode appelée lors de la soumission du formulaire
   * Elle valide les données avant de créer le match
   */
  onSubmit() {
    // Réinitialisation du message d'erreur
    this.messageErreur = '';

    // VALIDATION 1 : Vérifier que l'équipe A est sélectionnée
    if (!this.match.equipeA || !this.match.equipeA.id) {
      this.messageErreur = "Veuillez sélectionner l'équipe A";
      return; // Arrêter l'exécution si erreur
    }

    // VALIDATION 2 : Vérifier que l'équipe B est sélectionnée
    if (!this.match.equipeB || !this.match.equipeB.id) {
      this.messageErreur = "Veuillez sélectionner l'équipe B";
      return;
    }

    // VALIDATION 3 : Vérifier que la date est >= aujourd'hui
    const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    if (this.match.date < today) {
      this.messageErreur =
        "La date doit être supérieure ou égale à la date d'aujourd'hui";
      return;
    }

    // VALIDATION 4 : Vérifier que les deux équipes sont différentes
    if (this.match.equipeA.id === this.match.equipeB.id) {
      this.messageErreur =
        "Il faut choisir deux équipes différentes";
      return;
    }

    // Si toutes les validations passent, on peut créer le match
    this.ajouterMatch();
  }

  /**
   * Créer le match dans la base de données via l'API
   */
  ajouterMatch() {
    // On ne met PAS de champ id ici : json-server va créer un id auto-incrémenté
    const newMatch: Match = {
      date: this.match.date,
      heure: this.match.heure,
      lieu: this.match.lieu,
      equipeA: this.match.equipeA,
      equipeB: this.match.equipeB,
      score: { equipeA: 0, equipeB: 0 } // Score initialisé à 0 pour chaque équipe
    };

    // Appel HTTP POST pour créer le match
    this.matchService.addMatch(newMatch).subscribe({
      // next : Exécuté en cas de succès
      next: () => {
        // Redirection vers la liste des matchs après création réussie
        this.router.navigate(['/listematchs']);
      },
      // error : Exécuté en cas d'erreur (serveur non démarré, erreur réseau, etc.)
      error: (error) => {
        console.error('Erreur lors de l\'ajout du match:', error);
        this.messageErreur = 'Erreur lors de l\'ajout du match. Vérifiez que le serveur est démarré.';
      }
    });
  }
}
