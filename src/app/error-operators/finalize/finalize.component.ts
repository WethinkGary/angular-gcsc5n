import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css'],
})
export class FinalizeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 在來源Observable結束時候，可以做最後的處理
     * 他的順位會比complete還要更後面
     *
     */
    interval(1000)
      .pipe(
        take(5),
        finalize(() => {
          console.log('finalize 示範 pipe內的finzlize被呼叫了 ');
        }),
        map((data) => {
          return data + 1;
        })
      )
      .subscribe({
        next: (data) => {
          console.log('finalize => ' + data);
        },
        complete: () => {
          console.log('complete finalize');
        },
      });
  }
}
