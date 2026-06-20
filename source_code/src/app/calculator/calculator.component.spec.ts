import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  const translateServiceStub = {
    defaultLang: 'en',
    store: {
      translations: {
        en: {
          EnterAltitude: 'Enter altitude',
          EnterLatitude: 'Enter latitude',
          ErrorLat: 'Invalid latitude',
          ErrorEverest: 'Above Everest',
          ErrorDeadSea: 'Below Dead Sea'
        }
      }
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CalculatorComponent,
        TranslateModule.forRoot()
      ],
      providers: [
        NgbActiveModal,
        { provide: TranslateService, useValue: translateServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
