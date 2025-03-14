import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interfaces/interfaces';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent  implements OnInit {

  @Input() film!: Film;
  movie: Film | undefined;

  

  constructor(
      public favoritosService: FavoritosService, 
      private route: ActivatedRoute, 
      private filmsApi: FilmsApiService,
      private location: Location) {}

      ngOnInit() {
        this.route.params.subscribe(params => {
          const id = +params['id'];
          console.log(id);
          this.filmsApi.getFilmById(id).subscribe(movie => {
            this.movie = movie;
            console.log(this.movie);
          });
        });
      }

  like(){
    this.favoritosService.guardarFavorito(this.film);
  }

  goBack(){
    this.location.back();
  }

}
