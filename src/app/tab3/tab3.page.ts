import { Component } from '@angular/core';
import { FilmsApiService } from '../services/films-api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}
  
  
  navigateToCategorias(id: number, titulo: string) {
    this.router.navigate(['/categorias', id, { titulo: titulo }]);
  }

}
