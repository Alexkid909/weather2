import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import {LocationSearchService} from "./services/location-search.service";
import {FormsModule} from "@angular/forms";
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchInputComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LocationSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
