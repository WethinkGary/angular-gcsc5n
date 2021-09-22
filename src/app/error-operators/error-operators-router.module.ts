import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorOperatorsComponent } from './error-operators.component';

const errorOperatorRoutes: Routes = [
  {
    path: '',
    component: ErrorOperatorsComponent,
    children: [],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(errorOperatorRoutes)],
  exports: [RouterModule],
  declarations: [ErrorOperatorsComponent],
})
export class ErrorOperatorsRouterModule {}
