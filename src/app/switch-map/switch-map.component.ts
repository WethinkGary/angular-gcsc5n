import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * switchMap
     * 他是把來源的資料流在做一次邏輯處理後，再回傳一個Obserable
     * 然後訂閱這個新的Obserable
     * 訂閱者就會收到新的Obserable的資料
     * 原先舊的Obserable就會被退訂，就算舊的Obserable還沒結束照樣退訂
     */
    interval(4000)
      .pipe(
        switchMap(() => timer(1, 1000)),
        takeWhile(() => this.alive)
      )
      .subscribe(data => {
        console.log('interval = ' + data);
      });
  }
}
