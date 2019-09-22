import { Component, OnInit, HostListener, Input, Injectable } from '@angular/core';
import { Gravity } from '../gravity';
import { OsmMessageServiceService } from '../osm-message-service.service';
import { OsmLocation } from '../osm-location';
import { Observable } from 'rxjs';

// declare variable
declare let L;

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.css']
})

export class OsmMapComponent implements OnInit {

  @Input() latitude: number;
  @Input() longitude: number;

  imgMarginTop: number;
  imgMarginLeft: number;
  mapHeight: number;
  gravityResult: string = "G";

  static map: any;

  currentLocation: Observable<OsmLocation>;

  osmLocationSubject$ = this.service.osmLocationSubject$;

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeMap();
  }

  resizeMap() {
    let mapHeight = document.body.clientHeight - (document.getElementById("titleBar").clientHeight + document.getElementById("footer").clientHeight);

    this.imgMarginTop = mapHeight - 89;
    this.imgMarginLeft = (document.body.clientWidth / 2) - 89;
    this.mapHeight = mapHeight;
  }

  constructor(private service: OsmMessageServiceService){ }

  setNewMarker(loc){
    new Gravity().getAltitude(parseFloat(loc[0]),parseFloat(loc[1])).then(function(result){
      let markerIcon = new L.DivIcon({
        className: 'my-div-icon',
        html: `<img style="height:32px;width:23.5px" class="my-div-image" src="assets/Map_pin_icon.svg"/>
                  <span class="my-div-span">${new Gravity().GetGravity(result.elevations[0].lat, result.elevations[0].elevation).toFixed(4)}m/s²</span>`
      });
      new L.marker(loc, { icon: markerIcon }).bindTooltip(`latitude: ${result.elevations[0].lat.toFixed(2)}°, altitude: ${result.elevations[0].elevation}m`).addTo(OsmMapComponent.map);
    });
  }

  ngOnInit() {
    this.service.osmLocationSubject$.subscribe(value => { 
      if (value.lat != undefined && value.lon != undefined){
        this.setNewMarker([value.lat,value.lon]); 
        OsmMapComponent.map.setView([value.lat,value.lon], 4);
      }
    });

    let curLocation = [];
    //El Salvador
    if (this.latitude == -1 && this.longitude == -1) {
      curLocation = [13.905190, -89.500206];      
    }
    else {
      curLocation = [this.latitude, this.longitude];
    }

    OsmMapComponent.map = L.map('map').setView(curLocation, 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(OsmMapComponent.map);

    L.control.locate().addTo(OsmMapComponent.map);
    OsmMapComponent.map.attributionControl.setPrefix(false);

    let markerIcon = L.icon({
      iconUrl: 'assets/Map_pin_icon_green.svg',
      iconSize: [94 / 3, 128 / 3], // size of the icon
    });

    let marker = new L.marker(curLocation, {
      icon: markerIcon,
      draggable: 'true'
    });

    marker.on('dragend', this.dragMarker);

    OsmMapComponent.map.addLayer(marker);

    OsmMapComponent.map.on('click', e => this.setNewMarker([e.latlng.lat, e.latlng.lng]));

    OsmMapComponent.map.on('locationfound', this.onLocationFound);
    this.resizeMap();
  }

  dragMarker(event:any) {
    // @ts-ignore
    let position = this.getLatLng();
    // @ts-ignore
    this.setLatLng(position, {
      draggable: 'true'
    }).bindPopup(position).bindTooltip("drag and drop the marker").update();

    new Gravity().getAltitude(position.lat,position.lng).then(function(result){
      return new Gravity().GetGravity(result.elevations[0].lat, result.elevations[0].elevation).toFixed(2);
    }).then(gResult =>{
      this.gravityResult = gResult;
      document.getElementById("lblGravity").innerHTML = `${gResult}`;
      document.getElementById("lblGUnit").innerHTML = `m/s²`;
    });
  }

  onLocationFound(e) {
    new Gravity().getAltitude(parseFloat(e.latlng.lat),parseFloat(e.latlng.lng)).then(function(result){
      let markerIcon = new L.DivIcon({
        className: 'my-div-icon',
        html: `<img style="height:32px;width:23.5px" class="my-div-image" src="assets/Map_pin_icon.svg"/>
                  <span class="my-div-span">${new Gravity().GetGravity(result.elevations[0].lat, result.elevations[0].elevation).toFixed(4)}m/s²</span>`
      });
      new L.marker([e.latlng.lat, e.latlng.lng], { icon: markerIcon }).bindTooltip(`latitude: ${result.elevations[0].lat.toFixed(2)}°, altitude: ${result.elevations[0].elevation}m`).addTo(OsmMapComponent.map);
    });
  }
}