import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'filmdetails/:id', component: FilmDetailsComponent },
  {
    path: 'categorias/:id',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
   