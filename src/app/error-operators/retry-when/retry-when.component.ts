import { Component, OnInit } from '@angular/core';
import { fromEvent, iif, interval, of, throwError } from 'rxjs';
import { map, retry, retryWhen, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.css'],
})
export class RetryWhenComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 若資料流發生錯誤，retryWhen可以自行設計邏輯
     * Observable會將錯誤拋到callback function
     * 然後必須回傳Observable，retryWhen會訂閱他
     * 每次他發生一個事件，就會去重試來源Observable
     * 直到回傳的Obeservable訂閱結束，才會停止重試
     *
     */
    interval(1000)
      .pipe(
        switchMap((data) => {
          console.log('data => ', data);
          return iif(() => data % 2 === 0, of(data), throwError('發生錯誤'));
        }),
        map((data) => data + 1),
        retryWhen((error) => {
          return interval(2000).pipe(take(3));
        })
      )
      .subscribe({
        next: (data) => {
          console.log('next => ', data);
        },
        error: (error) => {
          console.log('error => ', error);
        },
        complete: () => {
          console.log('complete !!!');
        },
      });

    /*------------------------------------------------- */
    const click$ = fromEvent(document, 'click');

    interval(1000)
      .pipe(
        switchMap((data) => {
          console.log('data => ', data);
          return iif(() => data % 2 === 0, of(data), throwError('發生錯誤'));
        }),
        map((data) => data + 1),
        retryWhen((error) => {
          return click$;
        })
      )
      .subscribe({
        next: (data) => {
          console.log('next => ', data);
        },
        error: (error) => {
          console.log('error => ', error);
        },
        complete: () => {
          console.log('complete !!!');
        },
      });
  }
}
