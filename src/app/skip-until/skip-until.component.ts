import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, skipUntil, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.css']
})
export class SkipUntilComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 會持續忽略來源Observable訂閱，直到skipUntil指定的Observable發出新的事件，
     * 才會開始有來源Observable資料流
     */
    const click$ = fromEvent(document.querySelector('#btnStop'), 'click');

    const source$ = interval(1000).pipe(map(data => data + 1));

    source$
      .pipe(
        takeWhile(() => this.alive),
        skipUntil(click$)
      )
      .subscribe(
        data => {
          console.log('skipUntil = ' + data);
        },
        error => {
          console.log('skipUntil error = ' + error);
        },
        () => {
          console.log('complate結束囉');
        }
      );
  }
}
