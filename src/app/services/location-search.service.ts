import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LocationSearchService {

  constructor(private http: HttpClient) { }

  searchTerm: string = 'New';
  locations: any;
  apiUrl: string = 'http://api.apixu.com/v1';
  apiKey: string = 'c2a07e37c34b4e659f065213171406';

  getLocations() {
    return this.http.get(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${this.searchTerm}`)
      .map(response => {
        console.log(response);
        return response;
      });
  };
}
