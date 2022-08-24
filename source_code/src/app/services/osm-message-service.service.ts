import { Injectable } from '@angular/core';
import "rxjs/add/observable/of";
import { OsmLocation } from '../classes/osm-location';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class OsmMessageServiceService {

  private osmLocation = new OsmLocation();
  osmLocationSubject$ = new BehaviorSubject<OsmLocation>(this.osmLocation);

  setLocations(osmLoc: OsmLocation) {
    this.osmLocationSubject$.next(osmLoc);
  }

  constructor() { }
}
