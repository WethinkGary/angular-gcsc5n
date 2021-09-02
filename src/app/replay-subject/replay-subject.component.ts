import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  source$: ReplaySubject<string>;
  constructor() {}

  ngOnInit() {
    /*
     ReplaySubject
     可以預設多個資料 讓一開始訂閱就收到多筆資料或者最近多次的資料
     也在第二個參數設定資料保留時間
     與BehaviorSubject很像 都有cache
     其餘特性跟Subject一致
    */
    // 自訂預設最近的三次資料
    this.source$ = new ReplaySubject(3, 2000);
    this.source$.subscribe(data => {
      console.log('ReplaySubject One ' + data);
    });
    this.source$.next('1');
    this.source$.next('2');

    this.source$.subscribe(data => {
      console.log('ReplaySubject Tow ' + data);
    });
    this.source$.next('3');
    this.source$.next('4');

    // 保留時間
    setTimeout(() => {
      console.log('setTimeout');
      this.source$.next('5');
      this.source$.next('6');
      this.source$.complete();
    }, 3000);
  }
}
