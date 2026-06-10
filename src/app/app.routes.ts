import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'instagram/setup',
    loadComponent: () => import('./pages/instagram-setup/instagram-setup.component').then(m => m.InstagramSetupComponent)
  },
  {
    path: 'instagram/content',
    loadComponent: () => import('./pages/instagram-content/instagram-content.component').then(m => m.InstagramContentComponent)
  },
  {
    path: 'whatsapp/setup',
    loadComponent: () => import('./pages/whatsapp-setup/whatsapp-setup.component').then(m => m.WhatsappSetupComponent)
  },
  {
    path: 'whatsapp/features',
    loadComponent: () => import('./pages/whatsapp-features/whatsapp-features.component').then(m => m.WhatsappFeaturesComponent)
  },
  {
    path: 'exemplos',
    loadComponent: () => import('./pages/exemplos/exemplos.component').then(m => m.ExemplosComponent)
  },
  {
    path: 'checklist',
    loadComponent: () => import('./pages/checklist/checklist.component').then(m => m.ChecklistComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];