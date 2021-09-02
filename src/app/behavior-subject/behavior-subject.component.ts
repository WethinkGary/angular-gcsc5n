import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {
  source$: BehaviorSubject<string>;
  constructor() {}

  ngOnInit() {
    /*
     BehaviorSubject
     可以預設一個資料 讓一開始訂閱就收到一筆資料或者最近一次的資料
     其餘特性跟Subject一致
    */
    this.source$ = new BehaviorSubject('0');
    this.source$.subscribe(data => {
      console.log('BehaviorSubject One ' + data);
    });
    this.source$.next('1');
    this.source$.next('2');

    this.source$.subscribe(data => {
      console.log('BehaviorSubject Tow ' + data);
    });
    this.source$.next('3');
    this.source$.next('4');
    this.source$.complete();
  }
}
