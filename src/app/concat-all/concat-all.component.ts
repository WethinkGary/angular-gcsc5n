import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { concatAll, map, switchAll, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.css']
})
export class ConcatAllComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }
  ngOnInit() {
    /**
     * 與concatMap類似
     * 將來源Obserable轉換成另一個Observable物件訂閱
     * 新的Observable產生時，舊的Observable若未結束，會等到舊的結束才訂閱新的Observable
     * concatMap = map()+concatAll() 兩個組合而成
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
    stream$.pipe(concatAll()).subscribe(data => {
      console.log('concatAll ' + data);
    });

    source$.next(1);

    setTimeout(() => {
      source$.next(2);
    }, 2000);

    setTimeout(() => {
      source$.next(3);
    }, 4000);
  }
}
