import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsmMapComponent } from './osm-map/osm-map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { OsmMessageServiceService } from './osm-message-service.service';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    OsmMapComponent,
    NavbarComponent,
    NavbarSearchComponent,
    FooterComponent,
    AboutComponent,
    CalculatorComponent,
    ComparisonComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AboutComponent,
    CalculatorComponent,
    ComparisonComponent,
    HelpComponent
  ],
  providers: [OsmMessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
