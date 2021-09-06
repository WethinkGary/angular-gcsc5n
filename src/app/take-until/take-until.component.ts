import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 會持續訂閱，直到有新的takeUntil指定的Observable事件發生才會結束
     */
    const click$ = fromEvent(document.querySelector('#btnStop'), 'click');

    const source$ = interval(1000).pipe(map(data => data + 1));

    source$
      .pipe(
        takeWhile(() => this.alive),
        takeUntil(click$)
      )
      .subscribe(
        data => {
          console.log('Until = ' + data);
        },
        () => {
          console.log('complate結束囉');
        }
      );
  }
}
