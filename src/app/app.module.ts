import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { SiteComponent } from './site/site.component';
import { TokenComponent } from './token/token.component';
import { MessagesComponent } from './messages/messages.component';
import { SitesComponent } from './sites/sites.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentsComponent } from './instruments/instruments.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SiteComponent,
    TokenComponent,
    MessagesComponent,
    SitesComponent,
    InstrumentComponent,
    InstrumentsComponent
  ],
  imports: [
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
