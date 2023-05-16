import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'ra',
    loadChildren: () => import('./pages/ra/ra.module').then( m => m.RaPageModule)
  },
  {
    path: 'ciclo',
    loadChildren: () => import('./pages/ciclo/ciclo.module').then( m => m.CicloPageModule)
  },
  {
    path: 'fases',
    loadChildren: () => import('./pages/fases/fases.module').then( m => m.FasesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
