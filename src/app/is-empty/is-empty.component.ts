import { Component, OnInit } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.css']
})
export class IsEmptyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 檢查Observable訂閱時是否沒有發生過任何事件
     * 如果直到結束都沒有 會回傳true
     * 如果直到結束前有   會回傳false
     */
    EMPTY.pipe(isEmpty()).subscribe(data => {
      console.log('isEmpty = ', data);
    });

    const emptySource$ = new Subject();
    emptySource$.pipe(isEmpty()).subscribe(data => {
      console.log('emptySource = ' + data);
    });

    setTimeout(() => emptySource$.complete(), 1000);
  }
}
