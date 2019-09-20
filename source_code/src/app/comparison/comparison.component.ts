import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CelestialObjects } from '../celestial-objects';
import { Gravity } from '../gravity';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  public selectedValueCO1:number=3;
  public selectedValueCO2:number=3;
  public selectedGUnits:number=0;
  public selectedWUnits:number=0;

  @Input() celestialObjects : Array<Object>;
  @Input() wUnits : Array<Object>;
  @Input() gUnits : Array<Object>;
  @Input() weight:number;
  @Input() wResult:string = "";

  messageComparisonStyle:string="text-primary";
  celestialImgFirst:string="./assets/earth.png";
  celestialImgSecond:string="./assets/earth.png";
  celestialStrFirstGravity:string="9.798 m/s²";
  celestialStrSecondGravity:string="9.798 m/s²";

  constructor(public activeModal: NgbActiveModal) { }

  onKeyWeight(event:any) {
    this.weight = event.target.value;
    this.calcWeight();
  }

  onWChange(wValue) {
    this.calcWeight();
  }

  onGUChange(guValue) {
    let g = new Gravity();
    if (this.selectedGUnits == 0) {
      // @ts-ignore
      this.celestialStrFirstGravity = `${this.celestialObjects[guValue].gravity} m/s²`;
      // @ts-ignore
      this.celestialStrSecondGravity = `${g.ChangeToMetres(this.celestialObjects[guValue].gravity).toFixed(3)} ft/s²`;
    }
    else {
      // @ts-ignore
      this.celestialStrFirstGravity = `${this.celestialObjects[guValue].gravity} m/s²`;
      // @ts-ignore
      this.celestialStrSecondGravity = `${g.ChangeToMetres(this.celestialObjects[guValue].gravity).toFixed(3)} ft/s²`;
    }
    this.calcWeight();
  }

  onCOChange1(coValue) {
    // @ts-ignore
    this.celestialImgFirst=`./assets/${this.celestialObjects[coValue].name.toLowerCase()}.png`;

    let g = new Gravity();
    if (this.selectedGUnits == 0) {
      // @ts-ignore
      this.celestialStrFirstGravity = `${this.celestialObjects[coValue].gravity} m/s²`;
    }
    else {
      // @ts-ignore
      this.celestialStrFirstGravity = `${g.ChangeToMetres(this.celestialObjects[coValue].gravity).toFixed(3)} ft/s²`;
    }
    this.calcWeight();
  }

  onCOChange2(coValue) {
    // @ts-ignore
    this.celestialImgSecond=`./assets/${this.celestialObjects[coValue].name.toLowerCase()}.png`;

    let g = new Gravity();

    if (this.selectedGUnits == 0){
      // @ts-ignore
      this.celestialStrSecondGravity = `${this.celestialObjects[coValue].gravity} m/s²`;
    }
    else {
      // @ts-ignore
      this.celestialStrSecondGravity = `${g.ChangeToMetres(this.celestialObjects[coValue].gravity).toFixed(3)} ft/s²`;
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

  ngOnInit() {
    this.celestialObjects = new CelestialObjects().getCelestialObjects();
    
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
      }
    ];

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
  }
}