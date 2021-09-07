import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { sample, sampleTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * sample會取樣，傳入一個notifier的Observable
     * sample就會訂閱notifier 然後每當這個notifier有新事件發生
     * 就會取來源Observable最近一筆發生過的資料值
     * 所以可以透過notifier Observable自行決定取樣時間點
     *
     * 如果現在notifier設定1200毫秒有新新事件 0~1200秒最近的一筆來源Observable資料
     * notifier設定1500毫秒有新新事件 1201~1500最近一筆
     *  notifier設定2000毫秒有新新事件 1501~2000最近一筆
     */
    const notifier$ = new Subject();
    const source$ = interval(1000);
    source$
      .pipe(
        take(5),
        sample(notifier$)
      )
      .subscribe(
        data => {
          console.log('sample = ', +data);
        },
        error => {
          console.log('sample error = ', +error);
        },
        () => {
          console.log('sample complate ');
        }
      );

    setTimeout(() => notifier$.next(''), 1200);
    setTimeout(() => notifier$.next(''), 1500);
    setTimeout(() => notifier$.next(''), 2000);
  }
}

function invertel() {
  throw new Error('Function not implemented.');
}
