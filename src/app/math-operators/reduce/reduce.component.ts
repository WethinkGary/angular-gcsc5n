import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 與scan很像
     * 但reduce不會運算完後就流入資料，而是等到最後結束訂閱才流入
     */
    const donateAmount = [100, 200, 500, 900];

    const accumDonate$ = of(...donateAmount)
      .pipe(
        reduce((acc, value) => {
          return acc + value;
        })
      )
      .subscribe(data => {
        console.log(' reduce = ' + data);
      });
  }
}
