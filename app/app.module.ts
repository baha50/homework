import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import {ConnectionServiceModule} from 'ng-connection-service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ConnectionServiceModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [Network,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
