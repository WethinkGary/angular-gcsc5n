import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinComponent } from './min/min.component';
import { MathOperatorsComponent } from './math-operators.component';
import { MathOperatorRouterModule } from './math-operators-router.module';

@NgModule({
  imports: [CommonModule, MathOperatorRouterModule],
  declarations: [MinComponent, MathOperatorsComponent]
})
export class MathOperatorsModule {}
