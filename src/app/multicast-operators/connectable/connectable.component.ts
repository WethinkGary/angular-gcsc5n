import { Component, OnInit } from '@angular/core';
import { connectable, interval, Subject } from 'rxjs';
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
     *
     * resetOnDisconnect = true 當unsubscribe後，再次subscribe時候
     * 則會重新跟訂閱者一起共享資料，舊的訂閱者的資料不會延續
     * resetOnDisconnect = false 當unsubscribe後，再次subscribe時候
     * 舊的訂閱者的資料會延續，保持原來的資料流，因為不會再重新建立Subject物件，
     * 所以過去的訂閱者也會跟著再次收到資料
     */
    const source$ = interval(1000).pipe(take(10));
    const connectableSource$ = connectable(source$, {
      connector: () => {
        console.log('建立新的Subject');
        return new Subject();
      },
      resetOnDisconnect: false,
    });

    connectableSource$.subscribe((data) => {
      console.log('第一次訂閱', data);
    });

    setTimeout(() => {
      connectableSource$.subscribe((data) => {
        console.log('第二次訂閱', data);
      });
    }, 3000);

    setTimeout(() => {
      const subscription = connectableSource$.connect();
      setTimeout(() => {
        subscription.unsubscribe();
      }, 2000);
    }, 4000);

    setTimeout(() => {
      const subscription = connectableSource$.connect();

      connectableSource$.subscribe((data) => {
        console.log('第三次訂閱 ', data);
      });
      setTimeout(() => {
        connectableSource$.subscribe((data) => {
          console.log('第四次訂閱', data);
        });
      }, 3000);

      setTimeout(() => {
        subscription.unsubscribe();
      }, 6000);
    }, 10000);
  }
}
