import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { Film } from 'src/app/interfaces/interfaces';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { FilmsApiService } from 'src/app/services/films-api.service';


@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.scss'],
})
export class DetallesLibroComponent  implements OnInit {

  @Input() film!: Film;
  movie: Film | undefined;

  

  constructor(
      public favoritosService: FavoritosService, 
      private route: ActivatedRoute, 
      private filmsApi: FilmsApiService) {}

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


}
