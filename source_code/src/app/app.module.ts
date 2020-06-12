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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OsmMessageServiceService } from './services/osm-message-service.service';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { HelpComponent } from './help/help.component';
import { ToastComponent } from './toast/toast.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
export class AppModule { 
  availableLng = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    let tmpLng = 'en';

    let currentLng = window.navigator.language.substring(0,2);

    if (this.availableLng.includes(currentLng))
      tmpLng = currentLng;

    translateService.setDefaultLang(tmpLng);
  }
}
