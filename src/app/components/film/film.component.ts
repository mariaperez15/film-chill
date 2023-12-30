import { Component, OnInit, Input} from '@angular/core';
import { Film } from 'src/app/interfaces/interfaces';
import { FavoritosService } from 'src/app/services/favoritos.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent  implements OnInit {


  @Input() film!: Film;
  @Input() enFavoritos: boolean = false;

  constructor(public favoritosService: FavoritosService) { }

  ngOnInit() {}

  like(){
    this.favoritosService.guardarFavorito(this.film);
  }

}
