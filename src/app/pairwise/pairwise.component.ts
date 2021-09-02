import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-pairwise',
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.css']
})
export class PairwiseComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 雙雙成對輸出，但第一次事件時的沒有前一次事件他不知如何處理，所以就會忽略
     */
    of(1, 2, 3, 4, 5, 6)
      .pipe(pairwise())
      .subscribe(data => {
        console.log('pairwise = ' + data);
      });
  }
}
