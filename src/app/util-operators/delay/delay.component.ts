import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css'],
})
export class DelayComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 讓Observable訂閱延遲時間在傳遞訂閱結果
     */
    timer(0, 1000)
      .pipe(take(4), delay(500))
      .subscribe((data) => {
        console.log('delay => ', data);
      });
  }
}
