0/**
 * SERVICE - GESTION DES MATCHS
 * 
 * Ce service gère toutes les opérations CRUD (Create, Read, Update, Delete)
 * concernant les matchs. Il communique avec l'API REST (json-server).
 * 
 * @Injectable({ providedIn: 'root' }) : 
 *   - Le service est disponible dans toute l'application (singleton)
 *   - Pas besoin de l'ajouter dans les providers du module
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { Observable } from 'rxjs'; // Observable permet de gérer les requêtes asynchrones

@Injectable({
  providedIn: 'root' // Service disponible dans toute l'application
})
export class MatchService {
  // URL de l'API REST pour les matchs (json-server)
  private URL = 'http://localhost:3000/matchs';

  // Injection de HttpClient pour faire des requêtes HTTP
  constructor(private http: HttpClient) {}

  /**
   * Créer un nouveau match
   * @param match - L'objet match à créer (sans id, car json-server le génère automatiquement)
   * @returns Observable<Match> - Le match créé avec son id généré
   */
  addMatch(match: Match): Observable<Match> {
    // POST : Créer une nouvelle ressource
    // json-server crée automatiquement un id auto-incrémenté
    return this.http.post<Match>(this.URL, match);
  }

  /**
   * Récupérer tous les matchs
   * @returns Observable<Match[]> - Liste de tous les matchs
   */
  getAll(): Observable<Match[]> {
    // GET : Récupérer toutes les ressources
    return this.http.get<Match[]>(this.URL);
  }

  /**
   * Récupérer tous les matchs (alias de getAll)
   * @returns Observable<Match[]> - Liste de tous les matchs
   */
  getMatchs(): Observable<Match[]> {
    return this.http.get<Match[]>(this.URL);
  }

  /**
   * Récupérer un match par son id
   * @param id - L'identifiant du match à récupérer
   * @returns Observable<Match> - Le match correspondant à l'id
   */
  getMatchById(id: number): Observable<Match> {
    // GET avec paramètre : Récupérer une ressource spécifique
    return this.http.get<Match>(`${this.URL}/${id}`);
  }

  /**
   * Mettre à jour un match existant
   * @param id - L'identifiant du match à modifier
   * @param match - L'objet match avec les nouvelles données
   * @returns Observable<Match> - Le match mis à jour
   */
  updateMatch(id: number, match: Match): Observable<Match> {
    // PUT : Mettre à jour une ressource existante
    return this.http.put<Match>(`${this.URL}/${id}`, match);
  }
}