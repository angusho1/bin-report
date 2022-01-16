import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { QrUrlComponent } from './pages/qr-url/qr-url.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    AppComponent,
    AddBinComponent,
    ReportComponent,
    ReportMapComponent,
    AuthComponent,
    QrUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    GoogleMapsModule,
    NzLayoutModule,
    AmplifyUIAngularModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
