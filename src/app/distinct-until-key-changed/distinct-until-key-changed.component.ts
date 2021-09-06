import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { distinct, distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.css']
})
export class DistinctUntilKeyChangedComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 把Observable訂閱重複的事件流的值過濾
     * 確保資料流不會有重複
     * distinctUntilKeyChanged第一個參數給字串，他會幫我們從物件裡面找出key
     * 來判斷是否資料重複發生
     *
     */
    const students = [
      { id: 1, score: 70 },
      { id: 2, score: 70 },
      { id: 2, score: 70 },
      { id: 1, score: 70 },
      { id: 1, score: 70 },
      { id: 4, score: 70 }
    ];
    from(students)
      .pipe(distinctUntilKeyChanged('id'))
      .subscribe(data => {
        console.log('distinctUntilKeyChanged = ', data);
      });

    console.log('/*-------------------------------------------------*/');

    from(students)
      .pipe(
        distinctUntilKeyChanged('id', (previous, current) => {
          return previous === current;
        })
      )
      .subscribe(data => {
        console.log('distinctUntilKeyChanged2 = ', data);
      });
  }
}
