import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.css']
})
export class DefaultIfEmptyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 來源Observable訂閱後到結束都沒發生任何事件的話，
     * 在結束時會給一個預設值流入事件
     */
    const emptySource$ = new Subject();

    emptySource$.pipe(defaultIfEmpty('a')).subscribe(data => {
      console.log('defaultIfEmpty = ' + data);
    });

    setTimeout(() => emptySource$.complete(), 1000);
  }
}
