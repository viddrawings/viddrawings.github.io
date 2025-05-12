import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    'path': '',
    loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    pathMatch: 'full'
  },
  {
    'path': 'info',
    loadComponent: () => import('./pages/beurs-info-page/beurs-info-page.component').then(m => m.BeursInfoPageComponent)
  },
  {
    'path': 'tickets',
    loadComponent: () => import('./pages/ticket-page/ticket-page.component').then(m => m.TicketPageComponent)
  },
  {
    'path': 'standhouders',
    loadComponent: () => import('./pages/standhouder-page/standhouder-page.component').then(m => m.StandhouderPageComponent)
  },
  {
    'path': 'faq',
    loadComponent: () => import('./pages/faq-page/faq-page.component').then(m => m.FaqPageComponent)
  },
  {
    'path': 'reglement',
    loadComponent: () => import('./pages/terms-page/terms-page.component').then(m => m.TermsPageComponent)
  },
  {
    'path': 'reglement-standhouder',
    loadComponent: () => import('./pages/terms-standhouders-page/terms-standhouders-page.component').then(m => m.TermsStandhoudersPageComponent)
  },
  {
    'path': 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  // {'path': '**', redirectTo: 'home' }
];
