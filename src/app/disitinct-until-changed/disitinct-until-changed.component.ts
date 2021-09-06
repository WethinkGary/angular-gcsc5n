import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-disitinct-until-changed',
  templateUrl: './disitinct-until-changed.component.html',
  styleUrls: ['./disitinct-until-changed.component.css']
})
export class DisitinctUntilChangedComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 把Observable訂閱重複的事件流的值過濾
     * 確保資料流不會有重複
     * 她可以給上一次的值和這次的值
     *
     */
    from([1, 1, 2, 2, 4])
      .pipe(distinctUntilChanged())
      .subscribe(data => {
        console.log('distinct = ' + data);
      });
    /*-------------------------------------------------*/
    const students = [
      { id: 1, score: 70 },
      { id: 2, score: 70 },
      { id: 2, score: 70 },
      { id: 1, score: 70 },
      { id: 1, score: 70 },
      { id: 4, score: 70 }
    ];
    from(students)
      .pipe(
        distinctUntilChanged((previous, current) => {
          return previous.id === current.id;
        })
      )
      .subscribe(data => {
        console.log('distinctUntilChanged = ' + data.id);
      });

    /*-------------------------------------------------*/
    /**
     * distinctUntilChanged第二個參數是keySelect callback function
     * 可以選擇傳進來的物件要當key的值
     * 第一個參數comparator call function的現在的值和上一次的值
     * 就會是keySelect callback function回傳的
     * 等於把比較的邏輯拆兩個 會比較好閱讀
     */
    from(students)
      .pipe(
        distinctUntilChanged(
          (previous, current) => {
            return previous === current;
          },
          student => student.id
        )
      )
      .subscribe(data => {
        console.log('distinctUntilChanged clear = ' + data.id);
      });
  }
}
