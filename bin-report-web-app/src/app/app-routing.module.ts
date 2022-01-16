import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBinComponent } from './pages/add-bin/add-bin.component';
import { ReportMapComponent } from './pages/report-map/report-map.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  { path: '', component: ReportMapComponent },
  { path: 'bins/:binId', component: AddBinComponent, canActivate: [] },
  { path: 'bins/:binId', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
