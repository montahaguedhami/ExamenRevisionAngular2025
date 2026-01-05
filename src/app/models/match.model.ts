/**
 * MODÈLE DE DONNÉES - MATCH
 * 
 * Cette classe représente un match de sport dans l'application.
 * Un match contient : date, heure, lieu, deux équipes et un score.
 */

import { Equipe } from './equipe.model';
import { Score } from './score.model';

export class Match {
  // id est optionnel car json-server le génère automatiquement lors de la création (auto-increment)
  id?: number;
  
  // Date du match au format YYYY-MM-DD
  date!: string;
  
  // Heure du match au format HH:mm
  heure!: string;
  
  // Lieu où se déroule le match
  lieu!: string;
  
  // Première équipe participant au match (objet Equipe)
  equipeA: Equipe = new Equipe();
  
  // Deuxième équipe participant au match (objet Equipe)
  equipeB: Equipe = new Equipe();
  
  // Score du match (objet Score contenant les points de chaque équipe)
  score: Score = new Score();
}
