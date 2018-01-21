import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {LocationSearchService} from "../../services/location-search.service";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  @Input() searchTerm: string;
  searchSubject = new Subject<string>();
  results: any;

  constructor(private locationSearchService: LocationSearchService) {
    this.locationSearchService.searchLocations(this.searchSubject)
      .subscribe(results => this.results = results);
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    console.log(changes);
    if(changes.searchTerm.currentValue) {
      this.searchSubject.next(changes.searchTerm.currentValue);
    }
  };

}
