import { Component, OnInit } from '@angular/core';
import { iif, interval, of, throwError } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 當Observable物件資料發生錯誤時，可以用retry來重試整個資料流
     * 可以設定要重試幾次
     * 不指定次數寫-1就會持續重試
     * 如果寫0則是直接讓錯誤發生
     */
    interval(1000)
      .pipe(
        switchMap((data) => {
          console.log('data => ', data);
          return iif(() => data % 2 === 0, of(data), throwError('發生錯誤'));
        }),
        map((data) => data + 1),
        retry(3)
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
