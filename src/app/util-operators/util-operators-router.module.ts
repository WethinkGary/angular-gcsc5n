import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilOperatorsComponent } from './util-operators.component';

const mathOperatorRoutes: Routes = [
  {
    path: '',
    component: UtilOperatorsComponent,
    children: []
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(mathOperatorRoutes)],
  exports: [RouterModule],
  declarations: [UtilOperatorsComponent]
})
export class UtilOperatorsRouterModule {}
