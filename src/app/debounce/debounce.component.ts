import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { debounce, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 在指定的時間內如果來源Observable沒有新的事件才會讓這個事件流過
     * 來源Observable有新事件時，會去訂閱debounce的Observable
     * 當debounce的Observable有新事件產生，但來源Observable沒有新事件
     * 就會讓debounce的結果流出，並結束訂閱，等待下一次來源Observable的新事件
     *
     * 來源Observable有新事件讓debounce的Observable訂閱，
     * 但debounce的Observable的訂閱還沒有新事件，來源Observable又有新事件
     * 則debounce的Observable的訂閱資料就不會流出，並且退訂
     *
     * 簡單來說 就是他要最新的資料，一旦來源有新資料進來，上一筆資料就無效
     * durationSelector可以自行寫事件發生時間的Observable or Promise
     */
    const source$ = interval(2000);
    const durationSelector$ = value => {
      if (value === 4) {
        value = 1;
      }
      return interval(value * 1000);
    };

    source$
      .pipe(
        debounce(durationSelector$),
        take(6)
      )
      .subscribe(
        data => {
          console.log('debounce = ' + data);
        },
        error => {},
        () => {
          console.log('complete  = ');
        }
      );
  }
}
