import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const documentButton = document.getElementsByClassName('event');
    fromEvent(documentButton, 'click').subscribe(event => {
      console.log('fromEvent 事件' + event.target);
    });
  }
}
