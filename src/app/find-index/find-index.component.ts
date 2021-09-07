import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { findIndex, map } from 'rxjs/operators';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.css']
})
export class FindIndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * findIndex需要一個callback function 自行設計判斷第一個值的邏輯
     * 得到的結果會是你第一次符合條件的索引值
     *
     * 也就是說 今天流過多少次事件，才有符合你的條件的事件
     * 就會收到index索引值
     */
    interval(1000)
      .pipe(
        map(data => data * 2),
        findIndex(data => data === 6)
      )
      .subscribe(data => {
        console.log('findIndex = ', data);
      });
  }
}
