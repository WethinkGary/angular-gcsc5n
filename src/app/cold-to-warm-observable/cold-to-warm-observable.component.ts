import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-cold-to-warm-observable',
  templateUrl: './cold-to-warm-observable.component.html',
  styleUrls: ['./cold-to-warm-observable.component.css']
})
export class ColdToWarmObservableComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /*
     BehaviorSubject
     可以預設一個資料 讓一開始訂閱就收到一筆資料或者最近一次的資料
     其餘特性跟Subject一致
    */
    const source$ = new Observable(subscriber => {
      console.log('開始進行API呼叫');
      fetch(
        'https://www.msn.com/zh-tw/news/national/%E8%BC%95%E9%A2%B1-%E5%A5%A7%E9%BA%A5%E6%96%AF-%E8%BF%91%E5%8F%B0%E6%99%82%E9%96%93%E6%9B%9D%E5%85%89-%E6%9D%B1%E5%8D%8A%E9%83%A8%E6%9C%89%E9%99%A3%E9%9B%A8%E6%B3%A8%E6%84%8F%E9%A2%A8%E6%B5%AA/ar-AANAetT?ocid=msedgntp'
      )
        .then(resp => {
          return '1000';
        })
        .then(respText => {
          subscriber.next(respText);
          subscriber.complete();
        });
    });
    // 從cold Observable變成 warm Observable 也就是從單播變多播
    const warmSource = source$.pipe(share());
    warmSource.subscribe(data => {
      console.log('第一次訂閱 ' + data);
    });

    warmSource.subscribe(data => {
      console.log('第二次訂閱 ' + data);
    });
  }
}
