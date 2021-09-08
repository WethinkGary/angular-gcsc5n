import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from './count/count.component';
import { MathOperatorsComponent } from './math-operators.component';
import { MaxComponent } from './max/max.component';
import { MinComponent } from './min/min.component';
import { ReduceComponent } from './reduce/reduce.component';

const mathOperatorRoutes: Routes = [
  {
    path: '',
    component: MathOperatorsComponent,
    children: [
      { path: 'min', component: MinComponent },
      { path: 'max', component: MaxComponent },
      { path: 'count', component: CountComponent },
      { path: 'reduce', component: ReduceComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(mathOperatorRoutes)],
  exports: [RouterModule],
  declarations: [MinComponent, MaxComponent, CountComponent, ReduceComponent]
})
export class MathOperatorRouterModule {}
