import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WrongValues, Gravity } from '../gravity';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  messageStyle:string="text-primary";
  gResult:string = "";
  decimalNumbers:string="5";
  calcForm: FormGroup;
  gUnits : Array<Object>;

  calcGravity(latitude:number, altitude:number, selectedGUnits:number) {
    this.messageStyle ="text-danger";
    
    let g = new Gravity();

    let gravity = parseFloat(g.GetGravity(latitude, altitude, false, selectedGUnits == 0 ? false : true).toFixed(parseInt(this.decimalNumbers)));
    switch (gravity) {
      case WrongValues.Latitude:
        this.gResult = `Incorrect latitude, it must be between -90° and +90°`;
        break;
      case WrongValues.Everest:
        this.gResult = "Altitude cannot be greater than the Mount Everest: " + (selectedGUnits == 1 ? g.ChangeToMetres(g.EVEREST).toFixed(0) + "ft": g.EVEREST + "m");
        break;
      case WrongValues.DeadSea:
        this.gResult = "Altitude cannot below the Dead Sea: " + (selectedGUnits == 1 ? g.ChangeToMetres(g.DEAD_SEA).toFixed(0) + "ft": g.DEAD_SEA + "m");
        break;
      default:
        this.gResult = gravity + (selectedGUnits == 1 ? " ft/s²" : " m/s²");
        this.messageStyle ="text-primary";
    }
  }

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  onChanges(): void {
    this.calcForm.valueChanges.subscribe(val => {
      this.decimalNumbers = val.rangeDec;
      if (val.latitude == '' || val.altitude == '') {
        this.gResult = "";
      }
      else {
          this.calcGravity(parseFloat(val.latitude), parseFloat(val.altitude), parseInt(val.gUnits));
      }
    });
  }

  ngOnInit() {
    this.calcForm = this.formBuilder.group({
      latitude: '',
      altitude: '',
      gUnits: 0,
      rangeDec: 5
    });

    this.calcForm.controls['gUnits'].setValue(0, {onlySelf: true});

    this.onChanges();

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