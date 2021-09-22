import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ErrorOperatorsComponent } from './error-operators.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { RetryComponent } from './retry/retry.component';

const errorOperatorRoutes: Routes = [
  {
    path: '',
    component: ErrorOperatorsComponent,
    children: [
      { path: 'catchErrorComponent', component: CatchErrorComponent },
      { path: 'retryComponent', component: RetryComponent },
      { path: 'retryWhenComponent', component: RetryWhenComponent },
      { path: 'finalizeComponent', component: FinalizeComponent },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(errorOperatorRoutes)],
  exports: [RouterModule],
  declarations: [
    ErrorOperatorsComponent,
    CatchErrorComponent,
    RetryComponent,
    RetryWhenComponent,
    FinalizeComponent,
  ],
})
export class ErrorOperatorsRouterModule {}
