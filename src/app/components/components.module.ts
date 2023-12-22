import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    FilmComponent,
    FilmsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    FilmsComponent,
    FilmComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
