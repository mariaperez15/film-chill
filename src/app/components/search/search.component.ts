import { Component, OnInit, Input } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { Film } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  @Input() films: Film[] = [];
  public results : Film[] = [];

  constructor(private filmsApi: FilmsApiService) {
    console.log(this.films);
   }

  ngOnInit() {}

  // searchFilm(event:any){
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.films.filter((film: Film) => 
  //   film.original_title && film.original_title.toLowerCase().indexOf(query) > -1);
  //   console.log("search ejecutandose")
  //   console.log("estas buscando: " +  query)
  // }

  searchFilm(event: any) {
    console.log(this.films);
    const query = event.target.value.toLowerCase();
    this.results = this.films.filter((film: Film) => {
        const titleToSearch = film.original_title ? film.original_title.toLowerCase() : (film.name ? film.name.toLowerCase() : '');
        return titleToSearch.includes(query);
    });
    console.log("search ejecutandose")
    console.log("estas buscando: " +  query)
    console.log(this.results)
}
}
