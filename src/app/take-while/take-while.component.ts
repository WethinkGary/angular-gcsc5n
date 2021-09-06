import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}

  ngOnDestroy(): void {
    this.alive = false;
  }
  ngOnInit() {
    /**
     * 自行寫結束訂閱的條件
     * 有一個inclusive參數，代表是否要包含判斷不符合時候也流入事件
     * 預設false，當設true，最後一筆不符合的也會跟著流入
     */
    const source$ = interval(1000).pipe(map(data => data + 1));

    source$.pipe(takeWhile(() => this.alive)).subscribe(
      data => {
        console.log('Until = ' + data);
      },
      () => {
        console.log('complate結束囉');
      }
    );

    source$.pipe(takeWhile(data => data < 3)).subscribe(
      data => {
        console.log('Until = ' + data);
      },
      () => {
        console.log('complate結束囉');
      }
    );
  }
}
