import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * debounceTime指定時間，來源Observable有新事件時會等待指定時間
     * 如果都沒有新的事件發生，就會把這筆資料流出
     * 如果等待時間途中有發生新事件，就會刷新等待時間，
     */
    const source$ = new Subject();

    source$.pipe(debounceTime(500)).subscribe(data => {
      console.log('debounceTime = ' + data);
    });

    setTimeout(() => source$.next(1), 0);
    setTimeout(() => source$.next(2), 100);
    setTimeout(() => source$.next(3), 200);
    setTimeout(() => source$.next(4), 900);
    setTimeout(() => source$.next(5), 1200);
    setTimeout(() => source$.next(6), 2000);
  }
}
