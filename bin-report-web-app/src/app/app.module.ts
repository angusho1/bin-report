import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBinComponent } from './pages/add-bin/add-bin.component';
import { ReportComponent } from './pages/report/report.component';
import { ReportMapComponent } from './pages/report-map/report-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AuthComponent } from './pages/auth/auth.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [
    AppComponent,
    AddBinComponent,
    ReportComponent,
    ReportMapComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    GoogleMapsModule,
    NzLayoutModule,
    AmplifyUIAngularModule,
    NzBreadCrumbModule,
    NzMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
