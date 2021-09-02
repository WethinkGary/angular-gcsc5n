import { Component, OnInit } from '@angular/core';
import { defer, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent implements OnInit {
  /**
   * 把一個Obserable物件包起來 等待被訂閱時候再執行這個Obserable
   * 好處是說 他是等到被訂閱 才開始動作，不會是你進畫面，就開始處理
   * Promise就是一個典型例子
   * 就算還沒呼叫.then()，resolve() function已經跑了
   * .then()不過就是接受結果而已
   * 這時候defer就派上用場了
   */
  constructor() {}

  ngOnInit() {
    const factory = () => {
      return of(1, 2, 3, 4);
    };
    const source$ = defer(factory);
    source$.subscribe(data => {
      console.log('defer = ' + data);
    });
  }
}
