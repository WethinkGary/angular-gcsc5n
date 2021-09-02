import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { concatMap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 資料流不會因為有新的Obserable就停止
     * 一定要等到舊的Obserable都停止才可以
     * 所以一定要有結束Obserable 否則會造成無法換成訂閱新Obserable
     * 所以他與SwitchMap不同的是
     * concatMap 非常注重每一次的資料流
     * switchMap 不在意每次的資料，只要資料最新即可
     */
    interval(3000)
      .pipe(
        concatMap(() => timer(0, 1000).pipe(take(4))),
        takeWhile(() => this.alive)
      )
      .subscribe(data => {
        console.log('interval = ' + data);
      });
  }
}
