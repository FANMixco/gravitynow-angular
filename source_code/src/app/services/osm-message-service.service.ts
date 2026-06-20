import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OsmLocation } from '../classes/osm-location';

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
