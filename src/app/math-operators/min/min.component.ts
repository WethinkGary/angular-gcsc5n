import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html'
})
export class MinComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {}
}
