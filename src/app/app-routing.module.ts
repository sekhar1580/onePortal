import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferalComponent } from './referal/referal.component';

const routes: Routes = [
  { path: 'referal', component: ReferalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
