/**
 * COMPOSANT - MODIFICATION DU SCORE D'UN MATCH
 * 
 * Ce composant permet de modifier le score d'un match existant.
 * Il récupère l'id du match depuis l'URL (paramètre de route).
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match.model';

@Component({
  selector: 'app-update-score-match',
  templateUrl: './update-score-match.component.html',
  styleUrls: ['./update-score-match.component.css']
})
export class UpdateScoreMatchComponent implements OnInit {
  // Identifiant du match à modifier (récupéré depuis l'URL)
  id!: number;
  
  // Objet match contenant les données à modifier
  match!: Match;

  // Injection des services nécessaires
  constructor(
    private route: ActivatedRoute,  // Service pour récupérer les paramètres de l'URL
    private matchService: MatchService, // Service pour récupérer et modifier le match
    private router: Router            // Service pour la navigation
  ) {}

  /**
   * Méthode appelée automatiquement après la création du composant
   * On récupère ici l'id depuis l'URL et on charge le match correspondant
   */
  ngOnInit(): void {
    // Récupération du paramètre 'id' depuis l'URL
    // Exemple : /listematchs/updatescore/1 -> id = "1"
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      // Conversion de la chaîne en nombre
      this.id = Number(idParam);
      
      // Vérification que la conversion a réussi (pas NaN)
      if (!isNaN(this.id)) {
        // Appel HTTP GET pour récupérer le match par son id
        this.matchService.getMatchById(this.id).subscribe({
          // next : Exécuté en cas de succès
          next: (data) => {
            this.match = data; // Stockage du match dans la propriété du composant
          },
          // error : Exécuté en cas d'erreur (match introuvable, serveur non démarré, etc.)
          error: (error) => {
            console.error('Erreur lors du chargement du match:', error);
          }
        });
      }
    }
  }

  /**
   * Méthode appelée lors du clic sur le bouton "Modifier"
   * Elle met à jour le score du match dans la base de données
   */
  modifier(): void {
    // Vérification que le match est bien chargé et a un id
    if (this.match && this.match.id) {
      // Appel HTTP PUT pour mettre à jour le match
      this.matchService.updateMatch(this.id, this.match).subscribe({
        // next : Exécuté en cas de succès
        next: () => {
          // Redirection vers la liste des matchs après modification réussie
          this.router.navigate(['/listematchs']);
        },
        // error : Exécuté en cas d'erreur (serveur non démarré, erreur réseau, etc.)
        error: (error) => {
          console.error('Erreur lors de la modification du score:', error);
        }
      });
    }
  }



  
}
