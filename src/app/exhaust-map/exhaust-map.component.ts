import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { exhaustMap, mergeMap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit, OnDestroy {
  reflush$;
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    const button = document.getElementById('reflush');

    this.reflush$ = fromEvent(button, 'click').pipe(
      exhaustMap(() => of(5, 6, 9, 4, 5, 6, 7).pipe(take(5))),
      takeWhile(() => this.alive)
    );

    this.reflush$.subscribe(data => {
      console.log('interval = ' + data);
    });
  }
}
