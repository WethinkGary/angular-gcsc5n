import { Component, OnInit } from '@angular/core';
import { forkJoin, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * forkJoin會同時訂閱所有Obserable
     * 但他會等到訂閱全部結束後，才會傳出每一筆Obserable的'最後一筆結果'組合起來
     *
     */
    const sourceA$ = interval(1000).pipe(
      map(data => 'A' + data),
      take(5)
    );
    const sourceB$ = interval(2000).pipe(
      map(data => 'B' + data),
      take(2)
    );
    const sourceC$ = interval(4000).pipe(
      map(data => 'C' + data),
      take(1)
    );

    forkJoin([sourceA$, sourceB$, sourceC$]).subscribe({
      next: data => {
        console.log('forkjoin next ' + data);
      },
      complete: () => {
        console.log('forkjoin conplate ');
      }
    });

    /**
     * forkJoin一樣可以傳入JavaScript物件的Obserable
     * 但他會等到訂閱全部結束後，才會傳出每一筆Obserable的'最後一筆結果'組合起來
     * 會依照傳入的欄位組成JavaScript物件
     */
    const dict = { A: sourceA$, B: sourceB$, C: sourceC$ };
    forkJoin(dict).subscribe({
      next: data => {
        console.log('forkjoin dict next ', data);
      },
      complete: () => {
        console.log('forkjoin dict conplate ');
      }
    });
  }
}
