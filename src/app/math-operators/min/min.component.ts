import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, merge, of } from 'rxjs';
import { map, min, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html'
})
export class MinComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 判斷來源Observable最小的值，作為訂閱的結果
     */
    of(5, 1, 9, 8)
      .pipe(min())
      .subscribe(data => {
        console.log('min = ' + data);
      });

    of(5)
      .pipe(
        min((data1, data2) => {
          return data1 - data2;
        })
      )
      .subscribe(data => {
        console.log('min = ' + data);
      });
  }
}
