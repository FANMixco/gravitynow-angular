import { Component, OnInit, Input } from '@angular/core';
import { OsmMessageServiceService } from '../osm-message-service.service';
import { OsmLocation } from '../osm-location';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Gravity, WrongValues } from '../gravity';
import { CelestialObjects } from '../celestial-objects';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public selectedValueCO1=3;
  public selectedValueCO2=3;
  public selectedGUnits1=0;
  public selectedGUnits2=0;
  public selectedWUnits=0;

  @Input() currentLocation: any;
  @Input() celestialObjects : Array<Object>;
  @Input() gUnits : Array<Object>;
  @Input() wUnits : Array<Object>;

  latitude:number;
  altitude:number;
  weight:number;
  gResult:string = "";
  wResult:string = "";
  messageStyle:string="text-primary";
  messageComparisonStyle:string="text-primary";
  celestialImgFirst:string="./assets/earth.png";
  celestialImgSecond:string="./assets/earth.png";
  celestialStrFirstGravity:string="9.798m/s²";
  celestialStrSecondGravity:string="9.798m/s²";

  onKeyWeight(event:any) {
    this.weight = event.target.value;
    this.calcWeight();
  }

  onKeyLat(event: any) {
    this.latitude = event.target.value;
    this.calcGravity();
  }

  onKeyAlt(event: any) {
    this.altitude = event.target.value;
  }

  onWChange(wValue) {
    this.calcWeight();
  }

  onGUChange(guValue) {
    let g = new Gravity();
    if (this.selectedGUnits2 == 0) {
      // @ts-ignore
      this.celestialStrFirstGravity = `${this.celestialObjects[guValue].gravity}m/s²`;
      // @ts-ignore
      this.celestialStrSecondGravity = `${g.ChangeToMetres(this.celestialObjects[guValue].gravity).toFixed(3)}ft/s²`;
    }
    else {
      // @ts-ignore
      this.celestialStrFirstGravity = `${this.celestialObjects[guValue].gravity}m/s²`;
      // @ts-ignore
      this.celestialStrSecondGravity = `${g.ChangeToMetres(this.celestialObjects[guValue].gravity).toFixed(3)}ft/s²`;
    }
    this.calcWeight();
  }

  onCOChange1(coValue) {
    // @ts-ignore
    this.celestialImgFirst=`./assets/${this.celestialObjects[coValue].name.toLowerCase()}.png`;

    let g = new Gravity();
    if (this.selectedGUnits2 == 0) {
      // @ts-ignore
      this.celestialStrFirstGravity = `${this.celestialObjects[coValue].gravity}m/s²`;
    }
    else {
      // @ts-ignore
      this.celestialStrFirstGravity = `${g.ChangeToMetres(this.celestialObjects[coValue].gravity).toFixed(3)}ft/s²`;
    }
    this.calcWeight();
  }

  onCOChange2(coValue) {
    // @ts-ignore
    this.celestialImgSecond=`./assets/${this.celestialObjects[coValue].name.toLowerCase()}.png`;

    let g = new Gravity();

    if (this.selectedGUnits2 == 0){
      // @ts-ignore
      this.celestialStrSecondGravity = `${this.celestialObjects[coValue].gravity}m/s²`;
    }
    else {
      // @ts-ignore
      this.celestialStrSecondGravity = `${g.ChangeToMetres(this.celestialObjects[coValue].gravity).toFixed(3)}ft/s²`;
    }
    this.calcWeight();
  }

  calcWeight(){
    if (this.weight == undefined) {
      return;
    }

    let data = new CelestialObjects();

    let weight = this.weight;
    let newWeight = 0;
    let gravity1 = data.getGravity(this.selectedValueCO1);
    let gravity2 = data.getGravity(this.selectedValueCO2);


    let difference = gravity2 / gravity1;

    if (this.selectedValueCO1 != 3) {
      var temp = data.getGravity(this.selectedValueCO1) / data.getGravity(3);
      newWeight = weight * temp;

      newWeight *= difference;
    }
    else {
      newWeight = weight * difference;
    }
    this.setWeight(weight, parseFloat(newWeight.toFixed(1)));
  }

  setWeight(initialWeight:number, newWeight:number){
    if (newWeight < initialWeight) {
      this.messageComparisonStyle = "text-success";

      // @ts-ignore
      this.wResult = `You are going to be lighter in ${this.celestialObjects[this.selectedValueCO2].name} check it out! ${newWeight} ${this.wUnits[this.selectedWUnits].name}`;
    }
    else if (newWeight > initialWeight) {
      this.messageComparisonStyle = "text-danger";
      // @ts-ignore
      this.wResult = `Your weight in ${this.celestialObjects[this.selectedValueCO2].name} is greater check it out! ${newWeight} ${this.wUnits[this.selectedWUnits].name}`;
    }
    else if (newWeight == initialWeight) {
      this.messageComparisonStyle = "text-primary";

      this.wResult = "Same weight";
    }
    else {
      this.messageComparisonStyle = "text-primary";

      this.wResult = "";
    }
  }

  calcGravity(){
    this.messageStyle ="text-danger";
    if (this.latitude == undefined || this.altitude == undefined)
      return;

    let g = new Gravity();

    let gravity = parseFloat(g.GetGravity(this.latitude, this.altitude, false, this.selectedGUnits1 == 0 ? false : true).toFixed(5));
    switch (gravity)
    {
      case WrongValues.Latitude:
        this.gResult = `Incorrect latitude, it must be between -90° and +90°`;
        break;
      case WrongValues.Everest:
        let strAltAbove = "Altitude cannot be greater than the Mount Everest";
        if (this.selectedGUnits1 == 1)
          this.gResult = `${strAltAbove} (${g.ChangeToMetres(g.EVEREST).toFixed(0)}ft)`;
        else
          this.gResult = `${strAltAbove} ( ${this.selectedGUnits1 == 1 ? g.ChangeToMetres(g.EVEREST).toFixed(0) :g.EVEREST}m)`;
        break;
      case WrongValues.DeadSea:
        let strAltBelow = "Altitude cannot be greater than the Mount Everest";
        if (this.selectedGUnits1 == 1)
          this.gResult = `${strAltBelow} (${g.ChangeToMetres(g.DEAD_SEA).toFixed(0)}ft)`;
        else
          this.gResult = `${strAltBelow} (${g.DEAD_SEA}m)`;
        break;
      default:
        if (this.selectedGUnits1 == 1)
          this.gResult = `${gravity}ft/s²`;
        else
          this.gResult = `${gravity}m/s²`;
        this.messageStyle ="text-primary";
    }
  }

  constructor(private service: OsmMessageServiceService, private modalService: NgbModal){
  }

  openCalc(contentCalc) {
    this.gResult = "";
    this.latitude = undefined;
    this.altitude = undefined;
    this.modalService.open(contentCalc, { centered: true, scrollable: true });
  }

  openHelp(contentHelp) {
    this.modalService.open(contentHelp, { centered: true, scrollable: true });
  }

  openComparison(contentComparison) {
    this.weight = undefined;
    this.wResult = undefined;
    this.modalService.open(contentComparison, { centered: true, scrollable: true });
  }

  openAbout(contentAbout) {
    this.modalService.open(contentAbout, { centered: true, scrollable: true });
  }

  ngOnInit() {
    this.celestialObjects = new CelestialObjects().getCelestialObjects();
    this.gUnits = 
    [
      {
        value:0,
        name:"m/s²",
        selected:"selected"
      },
      {
        value:1,
        name:"ft/s²",
        selected:""
      }
    ];
    this.wUnits =
    [
      {
        value:0,
        name:"kg",
        selected:"selected"
      },
      {
        value:1,
        name:"lb",
        selected:""
      }];
  }

  public setLocation(location: any):void {
    this.currentLocation = location;
    this.setLocations();
  }

  setLocations() {
    let d : OsmLocation = JSON.parse(JSON.stringify(this.currentLocation));
    this.service.setLocations(d);
  }
}
