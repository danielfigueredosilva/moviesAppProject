import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'detalhe/:id',
    loadComponent: () => import('./detalhe/detalhe.page').then( m => m.DetalhePage)
  },
];
