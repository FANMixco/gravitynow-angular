import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CelestialObjects } from '../celestial-objects';
import { Gravity } from '../gravity';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  wUnits : Array<Object>;
  gUnits : Array<Object>;
  celestialObjects : Array<Object>;

  comparisonForm: FormGroup;

  wResult:string = "";
  messageComparisonStyle:string="text-primary";
  gResult:string = "";
  messageGComparisonStyle:string="text-primary";
  celestialImgFirst:string="./assets/earth.png";
  celestialImgSecond:string="./assets/earth.png";
  celestialStrFirstGravity:string="9.798 m/s²";
  celestialStrSecondGravity:string="9.798 m/s²";

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  calcWeight(weight:number, selectedValueCO1:number, selectedValueCO2:number, selectedWUnits:number){
    if (weight == undefined) {
      this.wResult = "";
      return;
    }

    let data = new CelestialObjects();
    let newWeight = 0;
    let gravity1 = data.getGravity(selectedValueCO1);
    let gravity2 = data.getGravity(selectedValueCO2);

    let difference = gravity2 / gravity1;

    if (selectedValueCO1 != 3) {
      var temp = gravity1 / data.getGravity(3);

      newWeight = weight * temp;
      newWeight *= difference;
    }
    else {
      newWeight = weight * difference;
    }
    this.setWeight(weight, parseFloat(newWeight.toFixed(1)), selectedValueCO2, selectedWUnits);
  }

  setWeight(initialWeight:number, newWeight:number, selectedValueCO2:number, selectedWUnits:number){
    if (newWeight < initialWeight) {
      this.messageComparisonStyle = "text-success";
      // @ts-ignore
      this.wResult = `You are going to be lighter in ${this.celestialObjects[selectedValueCO2].name} check it out! ${newWeight} ${this.wUnits[selectedWUnits].name}`;
    }
    else if (newWeight > initialWeight) {
      this.messageComparisonStyle = "text-danger";
      // @ts-ignore
      this.wResult = `Your weight in ${this.celestialObjects[selectedValueCO2].name} is greater check it out! ${newWeight} ${this.wUnits[selectedWUnits].name}`;
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

  compareGravity(selectedValueCO1:number, selectedValueCO2:number){
    if (selectedValueCO1 == selectedValueCO2) {
      this.gResult = "";
      return;
    }

    let data = new CelestialObjects();

    let gPercentage = data.percentageGravity(selectedValueCO1, selectedValueCO2);

    let extra:string = "";

    if (selectedValueCO1 == 3 || selectedValueCO1 == 4 || selectedValueCO1 == 0) {
        extra = "the ";
    }

    switch (data.comparedGravity(selectedValueCO1, selectedValueCO2)) {
        case 0:
            this.messageGComparisonStyle = "text-success";
            // @ts-ignore
            this.gResult = `The gravity in ${extra}${this.celestialObjects[selectedValueCO1].name} is bigger in: ${gPercentage.toFixed(0)}%`;
            break;
        case 1:
            this.messageGComparisonStyle = "text-danger";
            // @ts-ignore
            this.gResult = `The gravity in ${extra}${this.celestialObjects[selectedValueCO1].name} is smaller in: ${gPercentage.toFixed(0)}%`;
            break;
    }
  }

  onChanges(): void {
    this.comparisonForm.valueChanges.subscribe(val => {
      // @ts-ignore
      this.celestialImgFirst=`./assets/${this.celestialObjects[val.selectedValueCO1].name.toLowerCase()}.png`;

      // @ts-ignore
      this.celestialImgSecond=`./assets/${this.celestialObjects[val.selectedValueCO2].name.toLowerCase()}.png`;

      if (val.selectedGUnits == 0) {
        // @ts-ignore
        this.celestialStrFirstGravity = `${this.celestialObjects[val.selectedValueCO1].gravity} m/s²`;
        // @ts-ignore
        this.celestialStrSecondGravity = `${this.celestialObjects[val.selectedValueCO2].gravity} m/s²`;
      }
      else {
        let g = new Gravity();
        // @ts-ignore
        this.celestialStrFirstGravity = `${g.ChangeToFeet(this.celestialObjects[val.selectedValueCO1].gravity).toFixed()} ft/s²`;
        // @ts-ignore
        this.celestialStrSecondGravity = `${g.ChangeToFeet(this.celestialObjects[val.selectedValueCO2].gravity).toFixed(3)} ft/s²`;
      }

      this.compareGravity(parseInt(val.selectedValueCO1), parseInt(val.selectedValueCO2));

      if (val.weight == '') {
        this.wResult = "";
      }
      else {
        this.calcWeight(parseFloat(val.weight), parseInt(val.selectedValueCO1), parseInt(val.selectedValueCO2), parseInt(val.selectedWUnits));
      }
    });
  }

  ngOnInit() {
    this.celestialObjects = new CelestialObjects().getCelestialObjects();

    this.comparisonForm = this.formBuilder.group({
      weight: '',
      selectedWUnits: 0,
      selectedGUnits: 0,
      selectedValueCO1: 3,
      selectedValueCO2: 3
    });

    this.comparisonForm.controls['selectedWUnits'].setValue(0, {onlySelf: true});
    this.comparisonForm.controls['selectedGUnits'].setValue(0, {onlySelf: true});
    this.comparisonForm.controls['selectedValueCO1'].setValue(3, {onlySelf: true});
    this.comparisonForm.controls['selectedValueCO2'].setValue(3, {onlySelf: true});

    this.onChanges();

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