import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 把Observable訂閱重複的事件流的值過濾
     * 確保資料流不會有重複
     *
     * 可以在第二個參數加上Observable，distinct會訂閱他
     * 一旦發生事件流，distinct就會刷新重複值的紀錄
     */
    from([1, 2, 3, 4, 4, 2, 3, 8])
      .pipe(distinct())
      .subscribe(data => {
        console.log('distinct = ' + data);
      });
    /*-------------------------------------------------*/
    const students = [
      { id: 1, score: 70 },
      { id: 2, score: 70 },
      { id: 3, score: 70 },
      { id: 1, score: 70 },
      { id: 2, score: 70 },
      { id: 4, score: 70 }
    ];
    from(students)
      .pipe(
        distinct(data => {
          return data.id;
        })
      )
      .subscribe(data => {
        console.log('distinct = ' + data.id);
      });

    /*-------------------------------------------------*/
    const source$ = new Subject();
    const sourceFlush$ = new Subject();

    source$
      .pipe(
        distinct(students => {
          return students.id;
        }, sourceFlush$)
      )
      .subscribe(data => {
        console.log('distinct clear = ' + data.id);
      });
    setTimeout(() => source$.next({ id: 1, score: 70 }), 1000);
    setTimeout(() => source$.next({ id: 2, score: 70 }), 2000);
    setTimeout(() => source$.next({ id: 3, score: 70 }), 3000);
    setTimeout(() => source$.next({ id: 4, score: 70 }), 4000);
    setTimeout(() => sourceFlush$.next(''), 4500);
    setTimeout(() => source$.next({ id: 4, score: 70 }), 6000);
  }
}
