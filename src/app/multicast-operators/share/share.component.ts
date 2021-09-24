import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { share, take } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 跟connectable很像都是把cold Observable轉成warm Observable
     * 差別
     * 1.share是放在pipe，而connectable是傳入參數後建立一個新的Observable
     * 2.share呼叫subscribe就會開始，connectable是在呼叫connect()才會開始
     * 3.share可以設定的參數比較多
     */
    const source$ = interval(1000).pipe(take(10), share());

    source$.subscribe((data) => {
      console.log('share示範 第一次訂閱 ' + data);
    });

    setTimeout(() => {
      source$.subscribe((data) => {
        console.log('share示範 第二次訂閱 ' + data);
      });
    }, 4500);
  }
}
