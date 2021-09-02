import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, zip } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * zip會同時訂閱並將Obserable物件依照發生的順序組合再一起變成一個陣列，
     * 但她會將每一個訂閱的第一次發生的組合成一個陣列
     * 所以A如果已經到A3 也就是過了四秒
     * 但陣列仍然是[A0,B0,C0]
     */
    const sourceA$ = interval(1000).pipe(map(data => 'A' + data));
    const sourceB$ = interval(2000).pipe(map(data => 'B' + data));
    const sourceC$ = interval(4000).pipe(map(data => 'C' + data));

    zip(sourceA$, sourceB$, sourceC$)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        console.log('zip = ', data);
      });
  }
}
