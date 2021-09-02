import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.alive = false;
  }

  ngOnInit() {
    const timer$ = timer(3000, 1000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        console.log('timer = ' + data);
      });
  }
}
