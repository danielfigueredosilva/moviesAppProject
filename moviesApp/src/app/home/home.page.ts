import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, SlicePipe, DecimalPipe } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import type { OverlayEventDetail } from '@ionic/core';
import { TmdbService } from '../services/tmdb';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, DatePipe, SlicePipe, DecimalPipe],
})
export class HomePage implements OnInit {
  movies: any[] = [];

  constructor(
    private toastController: ToastController,
    private tmdb: TmdbService
  ) {}

  ngOnInit() {
    // Carrega os filmes populares ao iniciar
    this.tmdb.getPopularMovies().subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (err) => console.error('Erro ao carregar filmes populares:', err),
    });
  }

  // 🔍 Método chamado sempre que o usuário digita no campo de busca
  onSearchChange(event: any) {
    const query = event.target.value;

    if (!query || query.trim() === '') {
      // Se o campo estiver vazio, volta para filmes populares
      this.tmdb.getPopularMovies().subscribe({
        next: (data) => (this.movies = data.results),
        error: (err) => console.error('Erro ao buscar filmes populares:', err),
      });
      return;
    }

    // Usa o método existente do seu serviço
    this.tmdb.searchMovies(query).subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (err) => console.error('Erro ao buscar filmes:', err),
    });
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Você adicionou o filme aos favoritos',
      duration: 1500,
      position,
      color: 'success',
      cssClass: 'custom-toast',
    });
    await toast.present();
  }

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => console.log('Alerta cancelado'),
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.presentToast('bottom');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }
}
