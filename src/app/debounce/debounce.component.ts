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
     * durationSelector可以自行寫事件發生時間的Observable or Promise
     */
    const source$ = interval(2000);
    const durationSelector$ = value => interval(value * 1000);

    source$
      .pipe(
        debounce(durationSelector$),
        take(6)
      )
      .subscribe(data => {
        console.log('debounce = ' + data);
      });
  }
}
