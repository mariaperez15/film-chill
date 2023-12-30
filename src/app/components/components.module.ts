import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilmComponent,
    FilmsComponent,
    DetallesLibroComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FilmsComponent,
    FilmComponent,
    DetallesLibroComponent,
  ]
})
export class ComponentsModule { }
