import { Routes } from '@angular/router';

export const routes: Routes = [
  {'path': '', loadComponent: () => import('./landing-page/landing-page.component').then(m => m.LandingPageComponent), pathMatch: 'full' },
  // {'path': 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  // {'path': 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  // {'path': '**', redirectTo: 'home' }
];
