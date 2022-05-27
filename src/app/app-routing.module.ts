import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data/data.component';
import { FormDateComponent } from './form-date/form-date/form-date.component';

const routes: Routes = [
  { path: '', component: FormDateComponent, pathMatch: 'full' },
  { path: 'home', component: FormDateComponent, pathMatch: 'full' },
  { path: 'data', component: DataComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
