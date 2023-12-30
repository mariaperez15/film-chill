import { Component } from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public favoritosService: FavoritosService,
    private location: Location
  ) {}

  goBack(){
    this.location.back();
  }

}
