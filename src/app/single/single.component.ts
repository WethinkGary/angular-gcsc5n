import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { last, single, take } from 'rxjs/operators';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 限制這個Observalbe訂閱所產生的資料流在'結束前'只有一次事件發生
     *
     * 當發生第二次 就會報錯
     * Too many matching values
     *
     * 如果到結束前 沒有任何一次事件發生 一樣會報錯
     * NotFoundError: No matching values
     */
    const source$ = timer(0, 1000).pipe(take(5));
    source$.pipe(single()).subscribe(
      data => {
        console.log('single = ' + data);
      },
      error => {
        console.log('error = ' + error);
      },
      () => {
        console.log('complate');
      }
    );

    source$
      .pipe(
        single(data => {
          return data > 3;
        })
      )
      .subscribe(
        data => {
          console.log('callback function single = ' + data);
        },
        error => {
          console.log('callback function error = ' + error);
        },
        () => {
          console.log('callback function complate');
        }
      );

    source$
      .pipe(
        single(data => {
          return data > 4;
        })
      )
      .subscribe(
        data => {
          console.log('callback function single = ' + data);
        },
        error => {
          console.log('callback function error = ' + error);
        },
        () => {
          console.log('callback function complate');
        }
      );
  }
}
