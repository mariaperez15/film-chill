import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    FilmComponent,
    FilmsComponent,
    FilmDetailsComponent,
    SearchComponent
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
    FilmDetailsComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
