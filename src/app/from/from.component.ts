import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /*
     from
     傳進去的參數會變Observable 可接收陣列 疊代 promise 其他Obserable物件等等
     發送結束直接呼叫complate()
    */

    /*
      這裡跟of()很像 但差異是from是一個一個把陣列內資料傳遞
      of()是直接把整個陣列傳遞出去
     */
    const formArray$ = from([1, 2, 3, 4]);
    formArray$.subscribe(
      data => {
        console.log('from Array Observable ' + data);
      },
      error => {},
      () => {
        console.log('complate結束囉');
      }
    );
    /*
      Promise非同步處理 是很多API常用的 也可以這樣整合透過subseribe來訂閱
      程式會更統一 但非同步就會有延遲問題 所以看console.log會發現慢很多
     */
    const formPromise$ = from(Promise.resolve(1));
    formPromise$.subscribe(
      data => {
        console.log('from Promise Observable ' + data);
      },
      error => {},
      () => {
        console.log('complate結束囉');
      }
    );

    /*
      傳入自己實作的疊代的物件 可以上網查yield javascript
     */
    const formIterable$ = from(forfunction(1, 5));
    formIterable$.subscribe(
      data => {
        console.log('from Iterable Observable ' + data);
      },
      error => {},
      () => {
        console.log('complate結束囉');
      }
    );

    /*
     傳入Obserable from會自動幫我們訂閱 然後再產生出新的Obserable
    */
    const formOfObserable$ = from(of(1, 2, 3));
    formOfObserable$.subscribe(
      data => {
        console.log('from Of Observable ' + data);
      },
      error => {},
      () => {
        console.log('complate結束囉');
      }
    );
  }
}
function* forfunction(start, end) {
  for (let i = start; i <= end; ++i) {
    yield i;
  }
}
