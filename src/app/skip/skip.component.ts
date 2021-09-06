import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, skip, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}

  ngOnDestroy(): void {
    this.alive = false;
  }
  ngOnInit() {
    /**
     * skip傳入一個數字，開始訂閱後，會先忽略指定的次數
     * 然後到指定數字+1後才會開始流入事件
     */
    const source$ = interval(1000)
      .pipe(
        skip(3),
        takeWhile(data => data < 5)
      )
      .subscribe(data => {
        console.log('skip = ' + data);
      });
  }
}
