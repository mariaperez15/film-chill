import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onInput(event: any) {
    const query = event.target.value.trim().toLowerCase();
    this.search.emit(query);
  }

}
