import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    timer(0, 1000)
      .pipe(take(6))
      .subscribe(
        data => {
          console.log('take = ' + data);
        },
        error => {
          console.log('error = ' + error);
        },
        () => {
          console.log('complate ');
        }
      );
  }
}
