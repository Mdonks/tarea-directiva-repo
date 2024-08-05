import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'primer-caso',
    loadChildren: () => import('./primer-caso/primer-caso.module').then( m => m.PrimerCasoPageModule)
  },
  {
    path: 'segundo-caso',
    loadChildren: () => import('./segundo-caso/segundo-caso.module').then( m => m.SegundoCasoPageModule)
  },
  {
    path: 'tercer-caso',
    loadChildren: () => import('./tercer-caso/tercer-caso.module').then( m => m.TercerCasoPageModule)
  },
  {
    path: 'cuarto-caso',
    loadChildren: () => import('./cuarto-caso/cuarto-caso.module').then( m => m.CuartoCasoPageModule)
  },
  {
    path: 'quinto-caso',
    loadChildren: () => import('./quinto-caso/quinto-caso.module').then( m => m.QuintoCasoPageModule)
  },
  {
    path: 'sexto-caso',
    loadChildren: () => import('./sexto-caso/sexto-caso.module').then( m => m.SextoCasoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
