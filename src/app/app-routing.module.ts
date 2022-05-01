import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFlightComponent } from './my-flight/my-flight.component';

const routes: Routes = [
  {path : '',component : MyFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
