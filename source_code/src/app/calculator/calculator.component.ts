import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WrongValues, Gravity } from '../gravity';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Input() latitude:number;
  @Input() altitude:number;
  @Input() gResult:string = "";
  @Input() gUnits : Array<Object>;

  public selectedGUnits:number=0;
  messageStyle:string="text-primary";

  onKeyLat(event: any) {
    this.latitude = event.target.value;
    this.calcGravity();
  }

  onGUChange(value) {
    this.calcGravity();
  }

  calcGravity() {
    this.messageStyle ="text-danger";
    if (this.latitude == undefined || this.altitude == undefined) {
      this.gResult = "";
      return;
    }
    
    let g = new Gravity();

    let gravity = parseFloat(g.GetGravity(this.latitude, this.altitude, false, this.selectedGUnits == 0 ? false : true).toFixed(5));
    switch (gravity)
    {
      case WrongValues.Latitude:
        this.gResult = `Incorrect latitude, it must be between -90° and +90°`;
        break;
      case WrongValues.Everest:
        this.gResult = "Altitude cannot be greater than the Mount Everest: " + (this.selectedGUnits == 1 ? g.ChangeToMetres(g.EVEREST).toFixed(0) + "ft": g.EVEREST + "m");
        break;
      case WrongValues.DeadSea:
        this.gResult = "Altitude cannot below the Dead Sea: " + (this.selectedGUnits == 1 ? g.ChangeToMetres(g.DEAD_SEA).toFixed(0) + "ft": g.DEAD_SEA + "m");
        break;
      default:
        this.gResult = gravity + (this.selectedGUnits == 1 ? "ft/s²":"m/s²");
        this.messageStyle ="text-primary";
    }
  }

  onKeyAlt(event: any) {
    this.altitude = event.target.value;
  }

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
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