import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { delay, delayWhen, take } from 'rxjs/operators';

@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html',
  styleUrls: ['./delay-when.component.css'],
})
export class DelayWhenComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * delayWhen 可以自訂延遲時間點
     */
    const delayFn = (value): Observable<any> => {
      return of(value).pipe(delay((value % 2) * 2000));
    };

    interval(1000)
      .pipe(
        take(3),
        delayWhen((value) => delayFn(value))
      )
      .subscribe((data) => {
        console.log('delayWhen = ', data);
      });
  }
}
