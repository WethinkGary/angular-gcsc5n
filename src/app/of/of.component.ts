import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /*
     of
     傳進去的參數會變Observable 發送結束直接呼叫complate()
    */
    // 發送多個參數 自動呼叫next()給訂閱者
    const source$ = of(1, 2, 3);
    source$.subscribe(
      data => {
        console.log('of Observable ' + data);
      },
      error => {},
      () => {
        console.log('complate結束囉');
      }
    );
    const sourceArray$ = of([1,2,3]);
    sourceArray$.subscribe(
      data => {
        console.log('of Observable ' + data);
      },
      error => {},
      () => {
        console.log('complate結束囉');
      }
    );
  }
}
