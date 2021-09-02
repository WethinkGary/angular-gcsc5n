import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * scan第一個參數
     * 累加函數
     * acc 累計
     * value 目前資料事件
     * index 第幾次發生
     *
     * scan第二個參數
     * 初始直
     */
    const donateAmount = [100, 500, 300, 250];

    const accumDonate$ = of(...donateAmount).pipe(
      scan((acc, value, index) => {
        console.log('acc = ' + acc);
        console.log('value = ' + value);
        console.log('index = ' + index);
        return acc + value;
      }, 0)
    );

    accumDonate$.subscribe(amount => {
      console.log('目前donate金額 = ' + amount);
    });
  }
}
