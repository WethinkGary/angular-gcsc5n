import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obserable',
  templateUrl: './obserable.component.html',
  styleUrls: ['./obserable.component.css']
})
export class ObserableComponent implements OnInit {
  source$: Observable<any>;
  constructor() {}

  ngOnInit() {
    this.source$ = new Observable(subscribe => {
      console.log('stream開始');
      subscribe.next(1);
      subscribe.next(2);
      subscribe.next(3);
      subscribe.next(4);
      console.log('stream結束');
      subscribe.complete();
    });

    this.source$.subscribe(data => {
      console.log('第一次 ' + data);
    });
    this.source$.subscribe(data => {
      console.log('第二次 ' + data);
    });
  }
}
