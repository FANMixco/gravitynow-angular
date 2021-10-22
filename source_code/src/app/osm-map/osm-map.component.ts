import { Component, OnInit, HostListener } from '@angular/core';
import { Gravity } from '../classes/gravity';
import { OsmMessageServiceService } from '../services/osm-message-service.service';
import { OsmLocation } from '../classes/osm-location';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// declare variable
declare let L;

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.css']
})

export class OsmMapComponent implements OnInit {

  static map: any;
  
  gravityResult: string = "G";
  defaultUnits:string = "m/s²";
  mapHeight: number;
  imgMarginTop: number;
  imgMarginLeft: number;
  currentLocation: Observable<OsmLocation>;
  osmLocationSubject$ = this.service.osmLocationSubject$;
  status: boolean = false;
  newLoc: number[];

  constructor(private service: OsmMessageServiceService, private translateService: TranslateService, private route: ActivatedRoute, private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.route.queryParams.subscribe(params => {

            let isDraggable = true;
            let isMetric = true;

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
              this.newLoc = params['newLoc'].split(',').map(Number);
            }

            localStorage.setItem('isMetric', `${isMetric}`);
            localStorage.setItem('defaultUnits', this.defaultUnits);

            this.service.osmLocationSubject$.subscribe(value => { 
              if (value.lat != undefined && value.lon != undefined){
                this.setNewMarker([value.lat,value.lon], this.translateService.store.translations[`${this.translateService.defaultLang}`]); 
                OsmMapComponent.map.setView([value.lat,value.lon], 4);
              }
            });

            let curLocation = [];

            if (this.newLoc) {
              curLocation = [this.newLoc[0], this.newLoc[1]];
              isDraggable = false;

              let isImperial = isMetric ? false : true;

              new Gravity().getAltitude(this.newLoc[0], this.newLoc[1]).then(function(result){
                return new Gravity().GetGravity(result.elevations[0].lat, result.elevations[0].elevation, true, isImperial).toFixed(2);
              }).then(gResult =>{
                this.gravityResult = gResult;
                document.getElementById("lblGravity").innerHTML = `${gResult}`;
                document.getElementById("lblGUnit").innerHTML = this.defaultUnits;
              });
            }
            else {
              //El Salvador
              curLocation = [13.905190, -89.500206];
            }

            OsmMapComponent.map = L.map('map').setView(curLocation, 4);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(OsmMapComponent.map);

            L.control.locate().addTo(OsmMapComponent.map);
            OsmMapComponent.map.attributionControl.setPrefix(false);

            let markerIcon = L.icon({
              iconUrl: 'assets/img/Map_pin_icon_green.svg',
              iconSize: [94 / 3, 128 / 3], // size of the icon
            });

            let marker = new L.marker(curLocation, {
              icon: markerIcon,
              draggable: isDraggable
            });

            marker.on('dragend', this.dragMarker);

            OsmMapComponent.map.addLayer(marker);

            OsmMapComponent.map.on('click', e => this.setNewMarker([e.latlng.lat, e.latlng.lng], this.translateService.store.translations[`${this.translateService.defaultLang}`]));

            OsmMapComponent.map.on('locationfound', e => this.setNewMarker([e.latlng.lat, e.latlng.lng], this.translateService.store.translations[`${this.translateService.defaultLang}`]));
            this.resizeMap();
          });
          this.resizeMap();
        }
    });
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeMap();
  }

  resizeMap() {
    let mapHeight = (!this.status) ? document.body.clientHeight - (document.getElementById("titleBar").clientHeight + document.getElementById("footer").clientHeight) : document.body.clientHeight;

    this.imgMarginTop = mapHeight - 89;
    this.imgMarginLeft = (document.body.clientWidth / 2) - 89;
    this.mapHeight = mapHeight;
  }
  
  async setNewMarker(loc, translations){
    let result = await new Gravity().getAltitude(parseFloat(loc[0]),parseFloat(loc[1]));

    let isImperial = localStorage.getItem('isMetric') == "true" ? false : true;

    let markerIcon = new L.DivIcon({
      className: 'my-div-icon',
      html: `<img style="height:32px;width:23.5px" class="my-div-image" src="assets/img/Map_pin_icon.svg"/>
                <span class="my-div-span">${new Gravity().GetGravity(result.elevations[0].lat, result.elevations[0].elevation, true, isImperial).toFixed(4)}${this.defaultUnits}</span>`
    });
    new L.marker(loc, { icon: markerIcon }).bindTooltip(`${translations.Latitude}: ${result.elevations[0].lat.toFixed(2)}°, ${translations.Longitude}: ${result.elevations[0].lon.toFixed(2)}°, ${translations.Altitude}: ${result.elevations[0].elevation}m`).addTo(OsmMapComponent.map);
  }

  ngOnInit() { }

  async dragMarker(event:any) {
    // @ts-ignore
    let position = this.getLatLng();
    // @ts-ignore
    this.setLatLng(position, {
      draggable: 'true'
    }).bindPopup(position).update();

    let isImperial = localStorage.getItem('isMetric') == "true" ? false : true;

    let result = await new Gravity().getAltitude(position.lat, position.lng);
    let gResult = new Gravity().GetGravity(result.elevations[0].lat, result.elevations[0].elevation, true, isImperial).toFixed(2);

    document.getElementById("lblGravity").innerHTML = `${gResult}`;
    document.getElementById("lblGUnit").innerHTML = localStorage.getItem('defaultUnits');
  }
}