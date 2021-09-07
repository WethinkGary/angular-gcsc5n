import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { find, take } from 'rxjs/operators';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 來源Observable的事件第一個符合條件的資料
     * 會傳入find callback Function 判斷是否符合指定條件
     * 如果符合就把這筆資料流過，並且結束這個來源Observable訂閱
     */
    interval(1000)
      .pipe(
        find(data => data === 3),
        take(5)
      )
      .subscribe(data => {
        console.log('find = ' + data);
      });
  }
}
