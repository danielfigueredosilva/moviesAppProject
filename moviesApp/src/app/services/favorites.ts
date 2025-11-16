import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Favorites {
  
  private storageKey = 'favorites';
  private list: any[] = [];

  constructor() {
    this.carregar();
  }

  //Carrega os favoritos do localStorage
  private carregar() {
    const salvo = localStorage.getItem(this.storageKey);
    this.list = salvo ? JSON.parse(salvo) : [];
  }

  //Salva no localStorage
  private salvar() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.list));
  }

  //Adiciona o filme
  add(movie: any) {
    if (!this.list.find(m => m.id === movie.id)) {
      this.list.push(movie);
      this.salvar();
    }
  }

  //Remove o filme 
  remove(id: number) {
    this.list = this.list.filter(m => m.id !== id);
    this.salvar();
  }

  //Todos os filmes
  getAll() {
    return this.list;
  }
}
