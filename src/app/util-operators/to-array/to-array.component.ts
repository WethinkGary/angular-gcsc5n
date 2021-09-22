import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 當Observable物件發生時，會先將資料存起來
     * 等待來源Observable結束後，才會將資料組成陣列傳到訂閱結果
     */
    interval(1000)
      .pipe(take(3), toArray())
      .subscribe((data) => {
        console.log('toArray => ', data);
      });
  }
}
