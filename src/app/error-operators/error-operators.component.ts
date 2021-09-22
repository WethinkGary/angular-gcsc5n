import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { exhaustMap, mergeMap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-error-operators',
  templateUrl: './error-operators.component.html',
})
export class ErrorOperatorsComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    console.log('ErrorOperatorsComponent !!!');
  }
}
