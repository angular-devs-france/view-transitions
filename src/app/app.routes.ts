import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'rooster/:id',
    loadComponent: () => import('./rooster-detail/rooster-detail.component').then(m => m.RoosterDetailComponent)
  }
];
