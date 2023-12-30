import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetallesLibroComponent } from './components/detalles-libro/detalles-libro.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'detallelibro/:id', component: DetallesLibroComponent },
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
   