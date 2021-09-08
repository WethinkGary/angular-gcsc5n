import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, merge, of } from 'rxjs';
import { map, min, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-util-operators',
  templateUrl: './util-operators.component.html'
})
export class UtilOperatorsComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    console.log('工具類型 GOGOG!!!!');
  }
}
