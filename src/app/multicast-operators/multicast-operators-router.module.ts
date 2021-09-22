import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MulticastOperatorsComponent } from './multicast-operators.component';
const multicastOperatorRoutes: Routes = [
  {
    path: '',
    component: MulticastOperatorsComponent,
    children: [],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(multicastOperatorRoutes)],
  exports: [RouterModule],
  declarations: [MulticastOperatorsComponent],
})
export class MulticastOperatorsRouterModule {}
