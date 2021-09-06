import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import {
  map,
  skipUntil,
  skipWhile,
  take,
  takeUntil,
  takeWhile
} from 'rxjs/operators';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.css']
})
export class SkipWhileComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 會持續忽略來源Observable訂閱，直到skipWhile寫的callback Function不符呵條件，
     * 才會開始有來源Observable資料流
     */

    const source$ = interval(1000).pipe(map(data => data + 1));

    source$
      .pipe(
  
        take(5) ,
        skipWhile(data => data < 3)
      )
      .subscribe(
        data => {
          console.log('skipWhile = ' + data);
        },
        error => {
          console.log('skipWhile error = ' + error);
        },
        () => {
          console.log('skipWhile complate結束囉');
        }
      );
  }
}
