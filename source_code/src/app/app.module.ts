import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ToastComponent } from './toast/toast.component';

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
    HelpComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
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
