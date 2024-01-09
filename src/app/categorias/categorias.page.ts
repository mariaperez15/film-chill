import { Component, OnInit, Input } from '@angular/core';
import { Film, Respuesta } from '../interfaces/interfaces';
import { FilmsApiService } from '../services/films-api.service';
import { ActivatedRoute } from '@angular/router';
import { FavoritosService } from '../services/favoritos.service';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  filmsPorGenero: Film[] = [];
  movies: Film[] = [];
  tituloCategoria: string | undefined;
  public results = [...this.movies];
  isSearching: boolean = false;
  enFavoritos: boolean = false; 
  

  constructor(
      private filmsApi: FilmsApiService, 
      private route: ActivatedRoute,
      public favoritosService: FavoritosService) {}
  

  ngOnInit() {
    this.favoritosService.cargarFavoritos();
    this.route.params.subscribe(params => {
      const categoriaId = +params['id'];
      console.log(categoriaId);
      this.getFilmPorGenero(categoriaId);   
    });

    this.route.paramMap.subscribe(paramMap => {
      this.tituloCategoria = paramMap.get('titulo') ?? undefined;
      console.log(this.tituloCategoria);
    });
  }
  

  onIonInfinite(event: any){
    this.route.params.subscribe(params => {
      const categoriaId = +params['id'];
      this.getFilmPorGenero(categoriaId, event);
    });
  }

  getFilmPorGenero(id: number, event?: any){
    this.filmsApi.obtenerfilmsPorGenero(id).subscribe((respuesta: Respuesta) => {
      this.filmsPorGenero = respuesta.results;
      console.log(this.filmsPorGenero);
      if(respuesta.results.length === 0){
        event.target.disabled = true;
        event.target.complete();
        return
      }
      this.movies.push(...respuesta.results);
      console.log(this.movies);
      console.log('Total de resultados:', respuesta.total_results);
      console.log('Total de páginas:', respuesta.total_pages)
      if(event){
        event.target.complete();
      }
    });
  }

  like(film: Film){
    console.log(film);
    this.favoritosService.guardarFavorito(film);
  }

  searchFilm(query: string) {
    this.isSearching = true;
    this.results = this.movies.filter((film: Film) => {
      const titleToSearch = film.original_title ? film.original_title.toLowerCase() : film.name ? film.name.toLowerCase() : '';
      return titleToSearch.includes(query);
    });

    console.log('search ejecutandose');
    console.log('Estas buscando: ' + query);
    console.log(this.results);
  }  


}
