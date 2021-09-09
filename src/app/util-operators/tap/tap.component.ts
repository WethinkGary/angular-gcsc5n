import { Component, OnInit } from '@angular/core';
import { interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        map(data => {
          return data * 2;
        }),
        tap(data => {
          console.log('目前資料 = ' + data);
        }),
        map(data => {
          return data + 1;
        }),
        tap(data => {
          console.log('目前資料 = ' + data);
        }),
        take(5)
      )
      .subscribe(data => {
        console.log('tap = ' + data);
      });
  }
}
