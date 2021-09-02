import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 跟ZIP非常像，最後傳出的都是資料陣列
     * 不同的點:
     * 1.傳入的Obserable可以是陣列方式、物件方式
     * 2.取Obserable的資料是'最後一筆資料'
     * 也會等到每個Obserable都有一筆資料才會傳出陣列
     */
    const sourceA$ = interval(1000).pipe(map(data => 'A' + data));
    const sourceB$ = interval(2000).pipe(map(data => 'B' + data));
    const sourceC$ = interval(4000).pipe(map(data => 'C' + data));

    combineLatest([sourceA$, sourceB$, sourceC$])
      .pipe(
        takeWhile(() => {
          return this.alive;
        })
      )
      .subscribe(data => {
        console.log('combineLatest = ' + data);
      });

    /**
     * Obserable組成JavaScript物件傳入combineLatest
     * 回傳出來的會依照Obserable物件訂閱的欄位名稱，組合成一個新的物件
     */

    const dict = { A: sourceA$, B: sourceB$, C: sourceC$ };
    combineLatest(dict)
      .pipe(
        takeWhile(() => {
          return this.alive;
        })
      )
      .subscribe(data => {
        console.log('dict = ', data);
      });
  }
}
