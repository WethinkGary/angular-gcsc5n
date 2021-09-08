import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathOperators',
  templateUrl: './math-operators.component.html'
})
export class MathOperatorsComponent implements OnInit, OnDestroy {
  alive = true;
  
  constructor() {}

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    console.log('數學Operators GOGO!!!');
  }
}
