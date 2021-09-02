import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * merge跟concat很像，不過merge是同時一起訂閱，concat是等上一個訂閱結束才會接續下一個
     */
    const sourceA$ = interval(1000).pipe(map(data => 'A' + data));
    const sourceB$ = interval(2000).pipe(map(data => 'B' + data));
    const sourceC$ = interval(4000).pipe(map(data => 'C' + data));

    merge(sourceA$, sourceB$, sourceC$)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        console.log('merge : ' + data);
      });
  }
}
