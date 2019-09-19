import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

const OSM_URL = "https://nominatim.openstreetmap.org/search/{0}?format=json&email=fanmixco@gmail.com";

let currentSearch;

@Injectable()
export class OSMService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(OSM_URL.replace('{0}', term)).pipe(
        map(response => {
          currentSearch = response;
          // @ts-ignore
          return response.map(a => a.display_name);
        })
      );
  }
}

@Component({
  selector: 'app-navbar-search',
  providers: [OSMService],
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed = false;
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _service: OSMService) {}

  selectedItem(item){
    //this.clickedItem = currentSearch.filter(x=>x.display_name == item.item)[0];
    //console.log(item);
    
    this.onItemSelected.emit(currentSearch.filter(x=>x.display_name == item.item)[0]);
  }
  
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )
  ngOnInit() {
  }

}
