import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 只取第一個事件資料
     * 然後就結束這個訂閱
     * 可以在first()裡面寫Function做判斷符合第一次事件資料的邏輯
     * 也可以不寫 第一次就是第一筆事件資料
     *
     */
    const source$ = timer(0, 1000).pipe(take(5));
    source$.pipe(first()).subscribe(
      data => {
        console.log('first = ' + data);
      },
      error => {
        console.log('error = ' + error);
      },
      () => {
        console.log('complate');
      }
    );

    source$
      .pipe(
        first(data => {
          return data > 3;
        })
      )
      .subscribe(
        data => {
          console.log('callback function first = ' + data);
        },
        error => {
          console.log('callback function error = ' + error);
        },
        () => {
          console.log('callback function complate');
        }
      );
  }
}
