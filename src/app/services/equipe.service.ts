/**
 * SERVICE - GESTION DES ÉQUIPES
 * 
 * Ce service gère la récupération des équipes depuis l'API REST.
 * Il transforme les données pour s'assurer que le champ 'nom' est toujours présent
 * (car json-server peut utiliser 'name' au lieu de 'nom').
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipe } from '../models/equipe.model';
import { map } from 'rxjs/operators'; // Opérateur pour transformer les données
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service disponible dans toute l'application
})
export class EquipeService {
  // URL de l'API REST pour les équipes (json-server)
  private url = 'http://localhost:3000/equipes';

  // Injection de HttpClient pour faire des requêtes HTTP
  constructor(private http: HttpClient) {}

  /**
   * Récupérer toutes les équipes
   * @returns Observable<Equipe[]> - Liste de toutes les équipes
   * 
   * Note : On utilise map() pour transformer les données car json-server
   * peut retourner 'name' au lieu de 'nom', donc on normalise le format.
   */
  getEquipes(): Observable<Equipe[]> {
    return this.http.get<any[]>(this.url).pipe(
      // pipe() : Permet d'appliquer des opérateurs RxJS (transformations, filtres, etc.)
      map(equipes => equipes.map(e => ({
        // Transformation de chaque équipe pour garantir le format correct
        id: e.id,
        nom: e.name || e.nom, // Supporte 'name' (json-server) et 'nom' (modèle)
        natif: e.natif
      })))
    );
  }
}
