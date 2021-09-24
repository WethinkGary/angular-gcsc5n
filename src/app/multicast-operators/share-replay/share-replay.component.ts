import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css'],
})
export class ShareReplayComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * shareReplay跟share類似，就是把原先connector內預設的Subject()
     * 換成ReplaySubject()，所以可以用的參數大致上都跟ReplaySubject相同
     * bufferSize 最多保留最近幾次事件資料
     * windowTime 事件保留時間(毫秒)
     */
    const source$ = interval(1000).pipe(take(10), shareReplay(2));

    source$.subscribe((data) => {
      console.log('shareReplay 第一次訂閱 ' + data);
    });

    setTimeout(() => {
      console.log('shareReplay 第二次訂閱 ' + data);
    }, 5000);
  }
}
