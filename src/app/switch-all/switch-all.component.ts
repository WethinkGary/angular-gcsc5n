import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { map, switchAll, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.css']
})
export class SwitchAllComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 與switchMap類似
     * 將來源Obserable轉換成另一個Observable物件訂閱
     * 新的Observable產生時，舊的Observable若未結束，直接退訂舊的，訂閱新的Observable
     * switchMap = map()+switchAll() 兩個組合而成
     */
    const generateStream = round => {
      return timer(0, 1000).pipe(
        map(data => {
          return `資料流 ${round}: ${data + 1}`;
        }),
        takeWhile(() => this.alive)
      );
    };

    const source$ = new Subject();
    const stream$ = source$.pipe(
      map(round => generateStream(round)),
      takeWhile(() => this.alive)
    );
    stream$.pipe(switchAll()).subscribe(data => {
      console.log('switchAll ' + data);
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
