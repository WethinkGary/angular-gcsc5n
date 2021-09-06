import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import {
  map,
  skip,
  skipLast,
  take,
  takeUntil,
  takeWhile
} from 'rxjs/operators';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.css']
})
export class SkipLastComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}

  ngOnDestroy(): void {
    this.alive = false;
  }
  ngOnInit() {
    /**
     * skipLast傳入一個數字，開始訂閱後，會忽略最後指定的次數
     *
     */
    const source$ = interval(1000)
      .pipe(
        takeWhile(data => data < 5),
        skipLast(3)
      )
      .subscribe(
        data => {
          console.log('skipLast = ' + data);
        },
        error => {
          console.log('skipLast = ' + error);
        },
        () => {
          console.log('complate skipLast');
        }
      );
  }
}
