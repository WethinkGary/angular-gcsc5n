import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { concatAll, map, mergeAll, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.css']
})
export class MergeAllComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /*
     * 與mergeMap類似
     * 將來源Obserable轉換成另一個Observable物件訂閱
     * 新的Observable產生時，舊的Observable若未結束，會持續舊的observable的訂閱繼續
     * 所以mergeAll會將所有訂閱連接成一條，誰也不退訂，直到資料結束
     * mergeMap = map()+mergeAll() 兩個組合而成
     */
    const generateStream = round => {
      return timer(0, 1000).pipe(
        map(data => {
          return `資料流 ${round}: ${data + 1}`;
        }),
        takeWhile(() => this.alive),
        take(10)
      );
    };

    const source$ = new Subject();
    const stream$ = source$.pipe(
      map(round => generateStream(round)),
      takeWhile(() => this.alive)
    );
    stream$.pipe(mergeAll()).subscribe(data => {
      console.log('mergeAll ' + data);
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
