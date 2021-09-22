import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DelayComponent } from './delay/delay.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { UtilOperatorsComponent } from './util-operators.component';

const mathOperatorRoutes: Routes = [
  {
    path: '',
    component: UtilOperatorsComponent,
    children: [
      { path: 'tapComponent', component: TapComponent },
      { path: 'toArrayComponent', component: ToArrayComponent },
      { path: 'delayComponent', component: DelayComponent },
      { path: 'delayWhenComponent', component: DelayWhenComponent },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(mathOperatorRoutes)],
  exports: [RouterModule],
  declarations: [
    UtilOperatorsComponent,
    TapComponent,
    ToArrayComponent,
    DelayComponent,
    DelayWhenComponent,
  ],
})
export class UtilOperatorsRouterModule {}
