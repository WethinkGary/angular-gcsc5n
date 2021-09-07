import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { every, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.css']
})
export class EveryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 判斷訂閱的事件資料流是不是所有都符合條件
     * 如果是就得到true 不是就得到false
     */
    const source$ = interval(1000).pipe(
      map(data => data * 2),
      take(3)
    );

    source$.pipe(every(data => data % 2 === 0)).subscribe(data => {
      console.log('every = ' + data);
    });

    source$.pipe(every(data => data % 3 === 0)).subscribe(data => {
      console.log('every = ' + data);
    });
  }
}
