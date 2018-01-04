import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { LocationSearchService } from "../../services/location-search.service";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private locationSearchService: LocationSearchService) { }

  // @input() searchTerm: string;

  searchTerm: string = null;
  locations: any;

  ngOnInit() {
    this.locationSearchService.getLocations()
      .subscribe(locations => {
        this.locations = locations;
      });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.prop);
  //   debugger;
  //   this.locationSearchService.getLocations()
  //     .subscribe(locations => {
  //       this.locations = locations;
  //     });
  // }

}
