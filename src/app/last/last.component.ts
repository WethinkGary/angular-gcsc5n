import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { last, take } from 'rxjs/operators';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 只取最後一個事件資料
     * 而且要主動退訂，不然沒有最後一筆資料
     * 可以在last()裡面寫Function做判斷符合第一次事件資料的邏輯
     * 也可以不寫 第一次就是第一筆事件資料
     *
     */
    const source$ = timer(0, 1000).pipe(take(5));
    source$.pipe(last()).subscribe(
      data => {
        console.log('last = ' + data);
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
        last(data => {
          return data > 3;
        })
      )
      .subscribe(
        data => {
          console.log('callback function last = ' + data);
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
