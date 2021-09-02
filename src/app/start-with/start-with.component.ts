import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, pairwise, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * startWith會在開頭先加上一個起始值
     * 也就是訂閱的當下就會有第一個資料
     * 之前pairwise有說道 因為剛訂閱沒有上一個事件值所以忽略
     * 現在加上這個後，強制給初始值，原先第一個資料就變成第二個
     */
    interval(1000)
      .pipe(
        take(6),
        map(data => {
          return data + 1;
        }),
        startWith(0),
        pairwise()
      )
      .subscribe(data => {
        console.log('StartWithComponent GOGO = ' + data);
      });
  }
}
