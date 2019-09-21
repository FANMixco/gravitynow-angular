import { Component, OnInit, Input } from '@angular/core';
import { OsmMessageServiceService } from '../osm-message-service.service';
import { OsmLocation } from '../osm-location';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../about/about.component';
import { HelpComponent } from '../help/help.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ComparisonComponent } from '../comparison/comparison.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() currentLocation: any;
  navbarOpen = false;

  constructor(private service: OsmMessageServiceService, private modalService: NgbModal){
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  openCalc() {
    const calcConst = this.modalService.open(CalculatorComponent, { centered: true, scrollable: true });
    calcConst.componentInstance.latitude = undefined;
    calcConst.componentInstance.altitude = undefined;
    calcConst.componentInstance.gResult = undefined;
  }

  openHelp() {
    this.modalService.open(HelpComponent, { centered: true, scrollable: true });
  }

  openComparison() {
    const compConst = this.modalService.open(ComparisonComponent, { centered: true, scrollable: true });
    compConst.componentInstance.weight = undefined;
    compConst.componentInstance.wResult = undefined;
  }

  openAbout() {
    this.modalService.open(AboutComponent, {centered: true, scrollable: true});
  }

  ngOnInit() {
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
