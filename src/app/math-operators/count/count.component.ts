import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, merge, of } from 'rxjs';
import { count, map, max, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 判斷來源Observable在結束前總共發生幾次事件資料
     */
    of(5, 1, 9, 8)
      .pipe(count())
      .subscribe(data => {
        console.log('count = ' + data);
      });

    /**
     * 判斷來源Observable在結束前總共發生幾次符合條件的事件資料
     */
    of(5, 1, 9, 8)
      .pipe(count(data => data > 3))
      .subscribe(data => {
        console.log('count = ' + data);
      });
  }
}
