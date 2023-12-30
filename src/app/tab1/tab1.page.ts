import { Component, OnInit } from '@angular/core'; 
import { FilmsApiService } from '../services/films-api.service';
import { Respuesta, Film } from '../interfaces/interfaces';
import { FavoritosService } from 'src/app/services/favoritos.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  films: Film[] = [];
  currentPage = 1;
  enFavoritos: boolean = false;
  public results = [...this.films];
  isSearching: boolean = false;


  constructor(
    private filmsApi: FilmsApiService,
    private favoritosService: FavoritosService
    ) {}

  ngOnInit(){
    this.favoritosService.cargarFavoritos();
    this.cargarFilms();

  }

  cargarFilms(event?:any){
    this.filmsApi.obtenerfilms()
    .subscribe((data: Respuesta) => {
      console.log(data.results.length);

      if(data.results.length === 0){
        event.target.disabled = true;
        event.target.complete();
        return
      }

      this.films.push(...data.results);
      console.log(this.films);
      console.log('Total de resultados:', data.total_results);
      console.log('Total de páginas:', data.total_pages)

      if (event){
        event.target.complete();
      }
    });
  }

  onIonInfinite(event:any){
    this.cargarFilms(event);
  }
  
  searchFilm(query: string) {
    this.isSearching = true;
    this.results = this.films.filter((film: Film) => {
      const titleToSearch = film.original_title ? film.original_title.toLowerCase() : film.name ? film.name.toLowerCase() : '';
      return titleToSearch.includes(query);
    });
    console.log('Results después de la búsqueda:', this.results);
    console.log('search ejecutandose');
    console.log('estas buscando: ' + query);
    console.log(this.results);
  } 

}
