import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '23830b6b826e50d35a96e72356ba1f35';

  constructor(private http: HttpClient) {}

  // Exemplo: pegar filmes populares
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`);
  }

  // Exemplo: buscar um filme pelo nome
  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${query}`);
  }
}
