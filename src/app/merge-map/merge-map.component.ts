import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { concatMap, mergeMap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * mergeMap 會把所有被obserable訂閱的事件合併成一條資料流內
     * 類似平行處理，所以每次轉換的Obserable都會直接訂閱，不會退訂舊的Obserable
     * 適合及時訊息處理
     */
    interval(3000)
      .pipe(
        mergeMap(() => timer(0, 1000)),
        takeWhile(() => this.alive)
      )
      .subscribe(data => {
        console.log('interval = ' + data);
      });
  }
}
