import { Component, OnDestroy, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
ngOnDestroy(): void {
  this.alive = false;
}

  ngOnInit() {
    const source$ = throwError('錯誤發生');
    source$.pipe(takeWhile(()=>this.alive)).subscribe(
      data => {
        console.log('next 發生');
      },
      error => {
        console.log('error 錯誤發生' + error);
      },
      () => {
        console.log('complate 發生');
      }
    );
  }
}
