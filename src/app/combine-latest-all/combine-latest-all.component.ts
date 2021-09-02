import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject, timer } from 'rxjs';
import {
  combineLatestAll,
  concatAll,
  map,
  mergeAll,
  take,
  takeWhile
} from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest-all',
  templateUrl: './combine-latest-all.component.html',
  styleUrls: ['./combine-latest-all.component.css']
})
export class CombineLatestAllComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /*
     * combineLatestAll、combineLatest
     * 都是把事件資料組合再一起
     * 但他不同的是，他會先跑外層的Observable
     * 等到外層的Observable結束後，才會去跑內層的Observable
     * 然後再把最後一筆事件資料組合起來傳出
     * combineLatest需要指名要組合哪一些Observable
     * combineLatestAll適用對不明確的Observable
     */
    const generateStream = round => {
      return timer(0, 1000).pipe(
        map(data => {
          return `資料流 ${round}: ${data + 1}`;
        }),
        takeWhile(() => this.alive),
        take(3)
      );
    };

    const source$ = new Subject();
    const stream$ = source$.pipe(
      map(round => generateStream(round)),
      takeWhile(() => this.alive)
    );

    stream$.pipe(combineLatestAll()).subscribe(data => {
      console.log('combineLatestAll ' + data);
    });

    source$.next(1);

    setTimeout(() => {
      source$.next(2);
      source$.complete();
    }, 3000);
  }
}
