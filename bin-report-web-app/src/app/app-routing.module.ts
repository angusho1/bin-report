import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AddBinComponent } from './pages/add-bin/add-bin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { QrUrlComponent } from './pages/qr-url/qr-url.component';
import { ReportMapComponent } from './pages/report-map/report-map.component';
import { ReportComponent } from './pages/report/report.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: ReportMapComponent },
  { path: 'login', component: AuthComponent },
  { path: 'bins/:binId', component: QrUrlComponent,
    children: [
      { path: 'config', component: AddBinComponent, canActivate: [AuthGuardService] },
      { path: 'report', component: ReportComponent },
    ]  
  },
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
