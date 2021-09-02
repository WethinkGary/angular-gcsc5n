import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  source$: AsyncSubject<string>;
  constructor() {}

  ngOnInit() {
    /*
     AsyncSubject
     這段期間任何資料都不會流入，只有在complate()被呼叫時才會送出最後一筆資料
     其餘特性跟Subject一致
    */
    // 自訂預設最近的三次資料
    this.source$ = new AsyncSubject();
    this.source$.subscribe(data => {
      console.log('AsyncSubject One ' + data);
    });
    this.source$.next('1');
    this.source$.next('2');

    this.source$.subscribe(data => {
      console.log('AsyncSubject Tow ' + data);
    });
    this.source$.next('3');
    this.source$.next('4');
    this.source$.complete();
  }
}
