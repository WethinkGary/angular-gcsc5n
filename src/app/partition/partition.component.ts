import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, partition, Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.css']
})
export class PartitionComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * partition可以寫邏輯產出兩個不同的Obserable
     * source是放入一個來源Obserable
     * predicate實作一個function，寫入自己想要的邏輯，回傳boolean，他就會幫你分裝兩個Obserable
     * 來源Obserable訂閱之後每筆資料都會經過這個function，決定要把資料流給誰
     */
    const source$ = of(1, 2, 3, 4, 5, 6);

    const [sourceEven$, sourceOdd$] = partition(source$, this.checkNum);

    sourceEven$.pipe(takeWhile(() => this.alive)).subscribe(data => {
      console.log('sourceEven = ' + data);
    });
    sourceOdd$.pipe(takeWhile(() => this.alive)).subscribe(data => {
      console.log('sourceOdd = ' + data);
    });
    console.log('/*-----------------------------------------------------*/');

    const isLogin$ = new Subject();
    const [login$, logout$] = partition(isLogin$, this.checkLogin);

    login$.subscribe(data => {
      console.log('login = ' + data);
    });
    logout$.subscribe(data => {
      console.log('logout = ' + data);
    });

    setTimeout(() => {
      isLogin$.next(true);
    }, 1000);
    setTimeout(() => {
      isLogin$.next(false);
    }, 2000);
    setTimeout(() => {
      isLogin$.next(true);
    }, 3000);
    setTimeout(() => {
      isLogin$.next(false);
    }, 4000);
    setTimeout(() => {
      isLogin$.next(true);
    }, 5000);
  }

  checkNum(value: number, index: number): boolean {
    return value % 2 === 0;
  }

  checkLogin(value: boolean, index: number): boolean {
    return value;
  }
}
