import { Component, OnInit } from '@angular/core';
import { connectable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-connectable',
  templateUrl: './connectable.component.html',
  styleUrls: ['./connectable.component.css'],
})
export class ConnectableComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * 可以將原本cold Observable轉成warm Observable
     * 原本的interval是cold Observable(單播)
     * 透過connectable轉成warm Observable
     * 所以第二次訂閱的時候，就不會從0
     */
    const source$ = interval(1000).pipe(take(10));
    const connectableSource$ = connectable(source$);

    connectableSource$.subscribe((data) => {
      console.log('第一次訂閱', data);
    });

    setTimeout(() => {
      connectableSource$.subscribe((data) => {
        console.log('第二次訂閱', data);
      });
    }, 6000);

    setTimeout(() => {
      connectableSource$.connect();
    }, 3000);
  }
}
