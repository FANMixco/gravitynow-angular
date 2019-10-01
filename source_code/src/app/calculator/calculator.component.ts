import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WrongValues, Gravity } from '../classes/gravity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  enterLat:string;
  enterAlt:string;
  messageStyle:string="text-primary";
  gResult:string = "";
  decimalNumbers:string="5";
  calcForm: FormGroup;
  translations: any;
  gUnits: Array<Object>;

  calcGravity(latitude:number, altitude:number, selectedGUnits:number) {
    this.messageStyle ="text-danger";
    
    let g = new Gravity();

    let gravity = parseFloat(g.GetGravity(latitude, altitude, false, selectedGUnits == 0 ? false : true).toFixed(parseInt(this.decimalNumbers)));
    switch (gravity) {
      case WrongValues.Latitude:
        this.gResult = `${this.translations.ErrorLat}`;
        break;
      case WrongValues.Everest:
        this.gResult = `${this.translations.ErrorEverest}: ${(selectedGUnits == 1 ? g.ChangeToMetres(g.EVEREST).toFixed(0) + "ft": g.EVEREST + "m")}`;
        break;
      case WrongValues.DeadSea:
        this.gResult = `${this.translations.ErrorDeadSea}: ${(selectedGUnits == 1 ? g.ChangeToMetres(g.DEAD_SEA).toFixed(0) + "ft": g.DEAD_SEA + "m")}`;
        break;
      default:
        this.gResult = gravity + (selectedGUnits == 1 ? " ft/s²" : " m/s²");
        this.messageStyle ="text-primary";
    }
  }

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private translateService: TranslateService) { }

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
    this.translations=this.translateService.store.translations[`${this.translateService.defaultLang}`];
    this.enterAlt = this.translations.EnterAltitude;
    this.enterLat = this.translations.EnterLatitude;
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