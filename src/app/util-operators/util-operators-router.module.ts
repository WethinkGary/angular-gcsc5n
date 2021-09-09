import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapComponent } from './tap/tap.component';
import { UtilOperatorsComponent } from './util-operators.component';

const mathOperatorRoutes: Routes = [
  {
    path: '',
    component: UtilOperatorsComponent,
    children: [{ path: 'tapComponent', component: TapComponent }]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(mathOperatorRoutes)],
  exports: [RouterModule],
  declarations: [UtilOperatorsComponent, TapComponent]
})
export class UtilOperatorsRouterModule {}
