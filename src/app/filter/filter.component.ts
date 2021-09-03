import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  alive = true;
  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    const source$ = timer(0, 1000).pipe(take(10));

    source$
      .pipe(
        filter((data, index) => {
          return data > 3 && index > 5;
        })
      )
      .subscribe(data => {
        console.log('filter = ' + data);
      });
  }
}
