import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import type { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Gravity } from '../classes/gravity';
import { OsmLocation } from '../classes/osm-location';
import { OsmMessageServiceService } from '../services/osm-message-service.service';
import { TranslateService } from '@ngx-translate/core';

declare let L: any;

@Component({
  selector: 'app-osm-map',
  standalone: false,
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.css']
})
export class OsmMapComponent implements OnInit, AfterViewInit, OnDestroy {

  static map: any;

  gravityResult: string = "G";
  defaultUnits: string = "m/s²";
  mapHeight: number = 0;
  imgMarginTop: number = 0;
  imgMarginLeft: number = 0;
  currentLocation!: Observable<OsmLocation>;
  osmLocationSubject$ = this.service.osmLocationSubject$;
  status: boolean = false;
  newLoc: number[] | null = null;
  isMapLoading: boolean = true;

  private queryParamsSubscription?: Subscription;
  private osmLocationSubscription?: Subscription;

  constructor(
    private service: OsmMessageServiceService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.queryParamsSubscription = this.route.queryParams.subscribe(params => this.initializeMap(params));
    });
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeMap();
  }

  private initializeMap(params: any) {
    let isDraggable = true;
    let isMetric = true;
    this.status = false;
    this.defaultUnits = "m/s²";
    this.newLoc = null;

    if (params['isApp']) {
      this.status = params['isApp'] == "true" ? true : false;
    }

    if (params['isMetric']) {
      isMetric = params['isMetric'] == "true" ? true : false;
      if (!isMetric) {
        this.defaultUnits = 'ft/s²';
      }
    }

    if (params['newLoc']) {
      const parsedLocation = params['newLoc'].split(',').map(Number);
      this.newLoc = this.isValidLatLng(parsedLocation) ? parsedLocation : null;
    }

    localStorage.setItem('isMetric', `${isMetric}`);
    localStorage.setItem('defaultUnits', this.defaultUnits);

    let curLocation: number[];

    if (this.newLoc) {
      curLocation = [this.newLoc[0], this.newLoc[1]];
      isDraggable = false;
      const isImperial = isMetric ? false : true;

      new Gravity().getAltitude(this.newLoc[0], this.newLoc[1]).then(function(result){
        return new Gravity().GetGravity(result.results[0].latitude, result.results[0].elevation, true, isImperial).toFixed(2);
      }).then((gResult: any) => {
        this.gravityResult = gResult;
        const gravityLabel = document.getElementById("lblGravity");
        const unitLabel = document.getElementById("lblGUnit");
        if (gravityLabel) gravityLabel.innerHTML = `${gResult}`;
        if (unitLabel) unitLabel.innerHTML = this.defaultUnits;
      });
    }
    else {
      // El Salvador
      curLocation = [13.905190, -89.500206];
    }

    this.resizeMap();

    if (OsmMapComponent.map) {
      OsmMapComponent.map.remove();
    }

    OsmMapComponent.map = L.map('map').setView(curLocation, 4);

    this.isMapLoading = true;

    const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    tileLayer.on('loading', () => {
      this.setMapLoading(true);
    });

    tileLayer.on('load', () => {
      this.setMapLoading(false);
    });

    tileLayer.addTo(OsmMapComponent.map);

    L.control.locate().addTo(OsmMapComponent.map);
    OsmMapComponent.map.attributionControl.setPrefix(false);

    const markerIcon = L.icon({
      iconUrl: 'assets/img/Map_pin_icon_green.svg',
      iconSize: [94 / 3, 128 / 3],
    });

    const marker = new L.marker(curLocation, {
      icon: markerIcon,
      draggable: isDraggable
    });

    marker.on('dragend', this.dragMarker);

    OsmMapComponent.map.addLayer(marker);

    OsmMapComponent.map.on('click', (e: any) => this.setNewMarker([e.latlng.lat, e.latlng.lng], this.translateService.store.translations[`${this.translateService.defaultLang}`]));
    OsmMapComponent.map.on('locationfound', (e: any) => this.setNewMarker([e.latlng.lat, e.latlng.lng], this.translateService.store.translations[`${this.translateService.defaultLang}`]));

    this.subscribeToLocationSearch();
    this.resizeMap();
  }

  private subscribeToLocationSearch() {
    this.osmLocationSubscription?.unsubscribe();
    this.osmLocationSubscription = this.service.osmLocationSubject$.subscribe((value: OsmLocation) => {
      const selectedLocation = [Number(value.lat), Number(value.lon)];

      if (this.isValidLatLng(selectedLocation) && OsmMapComponent.map) {
        this.setNewMarker(selectedLocation, this.translateService.store.translations[`${this.translateService.defaultLang}`]);
        OsmMapComponent.map.setView(selectedLocation, 4);
      }
    });
  }

  private setMapLoading(isLoading: boolean) {
    this.isMapLoading = isLoading;
    this.changeDetectorRef.detectChanges();
  }

  resizeMap() {
    const titleBar = document.getElementById("titleBar");
    const footer = document.getElementById("footer");
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const chromeHeight = this.status ? 0 : ((titleBar?.clientHeight || 0) + (footer?.clientHeight || 0));
    const mapHeight = viewportHeight - chromeHeight;

    this.imgMarginTop = mapHeight - 89;
    this.imgMarginLeft = (document.body.clientWidth / 2) - 89;
    this.mapHeight = mapHeight;

    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.style.height = `${mapHeight}px`;
    }

    requestAnimationFrame(() => {
      OsmMapComponent.map?.invalidateSize(true);
      setTimeout(() => OsmMapComponent.map?.invalidateSize(true), 100);
    });
  }

  private isValidLatLng(loc: number[]) {
    return loc.length === 2 &&
      Number.isFinite(loc[0]) &&
      Number.isFinite(loc[1]) &&
      loc[0] >= -90 &&
      loc[0] <= 90 &&
      loc[1] >= -180 &&
      loc[1] <= 180;
  }

  async setNewMarker(loc: any, translations: any){
    let result = await new Gravity().getAltitude(parseFloat(loc[0]),parseFloat(loc[1]));

    let isImperial = localStorage.getItem('isMetric') == "true" ? false : true;

    let markerIcon = new L.DivIcon({
      className: 'my-div-icon',
      html: `<img style="height:32px;width:23.5px" class="my-div-image" src="assets/img/Map_pin_icon.svg"/>
                <span class="my-div-span">${new Gravity().GetGravity(result.results[0].latitude, result.results[0].elevation, true, isImperial).toFixed(4)}${this.defaultUnits}</span>`
    });
    new L.marker(loc, { icon: markerIcon }).bindTooltip(`${translations.Latitude}: ${result.results[0].latitude.toFixed(2)}Â°, ${translations.Longitude}: ${result.results[0].longitude.toFixed(2)}Â°, ${translations.Altitude}: ${result.results[0].elevation}m`).addTo(OsmMapComponent.map);
  }

  ngOnInit() { }

  async dragMarker(event: any) {
    // @ts-ignore
    let position = this.getLatLng();
    // @ts-ignore
    this.setLatLng(position, {
      draggable: 'true'
    }).bindPopup(position).update();

    let isImperial = localStorage.getItem('isMetric') == "true" ? false : true;

    let result = await new Gravity().getAltitude(position.lat, position.lng);
    let gResult = new Gravity().GetGravity(result.results[0].latitude, result.results[0].elevation, true, isImperial).toFixed(2);

    const gravityLabel = document.getElementById("lblGravity");
    const unitLabel = document.getElementById("lblGUnit");
    if (gravityLabel) gravityLabel.innerHTML = `${gResult}`;
    if (unitLabel) unitLabel.innerHTML = localStorage.getItem('defaultUnits') || '';
  }

  ngOnDestroy() {
    this.queryParamsSubscription?.unsubscribe();
    this.osmLocationSubscription?.unsubscribe();
    OsmMapComponent.map?.remove();
    OsmMapComponent.map = undefined;
  }
}
