import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBinComponent } from './pages/add-bin/add-bin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ReportMapComponent } from './pages/report-map/report-map.component';
import { ReportComponent } from './pages/report/report.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: ReportMapComponent },
  { path: 'login', component: AuthComponent },
  { path: 'bins/:binId', component: AddBinComponent, canActivate: [AuthGuardService], pathMatch: 'full' },
  { path: 'bins/:binId', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
