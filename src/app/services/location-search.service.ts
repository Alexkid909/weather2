import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {debug} from "util";

@Injectable()
export class LocationSearchService {

  baseUrl: string = 'http://api.apixu.com/v1';
  endpoint: string = '/search';
  dataType: string = 'json';
  keyString: string = '?key=c2a07e37c34b4e659f065213171406';
  queryUrl: string = `&q=`;

  constructor(private http: HttpClient) { }

  searchLocations(terms: Observable<string>) {
    console.log(terms);
    return terms.debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  };

  searchEntries(term) {
    let fullCallString: string = `${this.baseUrl}${this.endpoint}.${this.dataType}${this.keyString}${this.queryUrl}${term}`;
    console.log(fullCallString);
    return this.http
      .get(fullCallString)
      .map(result => result);
  };
}
