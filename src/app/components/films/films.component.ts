import { Component, Input, OnInit} from '@angular/core';
import { Film } from 'src/app/interfaces/interfaces';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent  implements OnInit {

  @Input() films: Film[] = [];
  @Input() enFavoritos: boolean = false;

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit() {}


  eliminarFav(favorito: Film) {
    this.favoritosService.eliminarFavorito(favorito);
    console.log('quitadoooo')
  }

}
