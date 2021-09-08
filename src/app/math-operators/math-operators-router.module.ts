import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathOperatorsComponent } from './math-operators.component';
import { MinComponent } from './min/min.component';

const mathOperatorRoutes: Routes = [
  {
    path: '',
    component: MathOperatorsComponent,
    children: [{ path: 'min', component: MinComponent }]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(mathOperatorRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class MathOperatorRouterModule {}
