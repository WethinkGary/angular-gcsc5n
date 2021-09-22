import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css'],
})
export class CatchErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        map((data) => {
          if (data % 2 === 0) {
            return data;
          } else {
            throw (new Error().message = '發生錯誤');
          }
        }),
        catchError(() => {
          return interval(1000);
        }),
        map((data) => {
          return data * 2;
        }),
        take(5)
      )
      .subscribe({
        next: (data) => {
          console.log('next => ', data);
        },
        error: (error) => {
          console.log('error => ', error);
        },
        complete: () => {
          console.log('complete ');
        },
      });
  }
}
