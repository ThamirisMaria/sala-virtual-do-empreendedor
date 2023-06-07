import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SalaVirtualComponent } from './sala-virtual/sala-virtual.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sala-virtual', component: SalaVirtualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
