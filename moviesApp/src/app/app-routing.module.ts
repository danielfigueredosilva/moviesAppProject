import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'favorites', loadComponent: () => import('./favorites/favorites.page').then(m => m.FavoritesPage) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


