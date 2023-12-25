import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  @Input() films: Film[] = [];
  @Input() enFavoritos: boolean = false;
  public results = [...this.films];
  isSearching: boolean = false;

  constructor() { }

  ngOnInit() {}
  searchFilm(event: any) {
    console.log(this.films);
    const query = event.target.value.trim().toLowerCase();
    this.isSearching = true;
    console.log("isSearching:", this.isSearching);
    this.results = this.films.filter((film: Film) => {
        const titleToSearch = film.original_title ? film.original_title.toLowerCase() : (film.name ? film.name.toLowerCase() : '');
        return titleToSearch.includes(query);
    });
    console.log("Results después de la búsqueda:", this.results);
    console.log("search ejecutandose")
    console.log("estas buscando: " +  query)
    console.log(this.results)

}


}
