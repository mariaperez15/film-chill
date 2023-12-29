import { Component } from '@angular/core';
import { FilmsApiService } from '../services/films-api.service';
import { Film, Respuesta } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  romanceMovies: Film[] = [];
  thrillerMovies: Film[] = [];
  dramaMovies: Film[] = [];
  actionMovies: Film[] = [];
  adventureMovies: Film[] = [];
  comediaMovies: Film[] = [];

  constructor(private filmsApi: FilmsApiService) {}
  
  getRomanceMovies(){
    const generoId = 10749;
    this.filmsApi.obtenerfilmsPorGenero(generoId).subscribe((respuesta: Respuesta) => {
      this.romanceMovies = respuesta.results;
    });
  }
  getThrillerMovies(){
    const generoId = 53;
    this.filmsApi.obtenerfilmsPorGenero(generoId).subscribe((respuesta: Respuesta) => {
      this.thrillerMovies = respuesta.results;
    });
  }
  getDramaMovies(){
    const generoId = 18;
    this.filmsApi.obtenerfilmsPorGenero(generoId).subscribe((respuesta: Respuesta) => {
      this.dramaMovies = respuesta.results;
    });
  }
  getActionMovies(){
    const generoId = 28;
    this.filmsApi.obtenerfilmsPorGenero(generoId).subscribe((respuesta: Respuesta) => {
      this.actionMovies = respuesta.results;
    });
  }
  getAdventureMovies(){
    const generoId = 12;
    this.filmsApi.obtenerfilmsPorGenero(generoId).subscribe((respuesta: Respuesta) => {
      this.adventureMovies = respuesta.results;
    });
  }
  getComediaMovies(){
    const generoId = 35;
    this.filmsApi.obtenerfilmsPorGenero(generoId).subscribe((respuesta: Respuesta) => {
      this.comediaMovies = respuesta.results;
    });
  }
}
