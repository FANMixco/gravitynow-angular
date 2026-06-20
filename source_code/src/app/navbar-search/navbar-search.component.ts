import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

const OSM_URL = "https://nominatim.openstreetmap.org/search";

@Injectable()
export class OSMService {
  currentSearch: any[] = [];

  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    const params = new HttpParams()
      .set('q', term)
      .set('format', 'json')
      .set('email', 'fanmixco@gmail.com');

    return this.http
      .get(OSM_URL, { params }).pipe(
        map((response: any) => {
          this.currentSearch = response;
          return response.map((a: any) => a.display_name);
        })
      );
  }
}

@Component({
  selector: 'app-navbar-search',
  standalone: false,
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

  selectedItem(item: any){
    this.onItemSelected.emit(this._service.currentSearch.filter((x: any) => x.display_name == item.item)[0]);
  }
  
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap((term: string) =>
        this._service.search(term).pipe(
          tap(() => {
            this.searchFailed = false;
          }),
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
