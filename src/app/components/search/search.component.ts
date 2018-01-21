import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchTerm: string;

}
