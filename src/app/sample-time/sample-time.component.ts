import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { sample, sampleTime } from 'rxjs/operators';

@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styleUrls: ['./sample-time.component.css']
})
export class SampleTimeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 設定的時間，取得最近一筆的資料樣本
     */
    const source$ = new Subject();
    source$.pipe(sampleTime(1500)).subscribe(
      data => {
        console.log('sampleTime = ', +data);
      },
      error => {
        console.log('sampleTime error = ', +error);
      },
      () => {
        console.log('sampleTime complate ');
      }
    );

    setTimeout(() => source$.next(1), 0);
    setTimeout(() => source$.next(2), 500);
    setTimeout(() => source$.next(3), 1000);
    setTimeout(() => source$.next(4), 3000);
    setTimeout(() => source$.next(5), 4000);
  }
}
