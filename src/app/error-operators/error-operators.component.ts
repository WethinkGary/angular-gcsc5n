import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { exhaustMap, mergeMap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-error-operators',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css'],
})
export class ErrorOperatorsComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {}
}
