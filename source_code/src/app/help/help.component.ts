import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    NgbModule,
    TranslateModule
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private translateService: TranslateService) { }

  ngOnInit() {
  }

}
