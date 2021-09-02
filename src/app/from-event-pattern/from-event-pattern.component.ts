import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-from-event-pattern',
  templateUrl: './from-event-pattern.component.html',
  styleUrls: ['./from-event-pattern.component.css']
})
export class FromEventPatternComponent implements OnInit {
  constructor() {}
  /**
   * FromEventPattern 自訂邏輯
   * addHandler:有人訂閱時呼叫這個funcation
   * removeHandler:有人取消訂閱時候呼叫這個funcation
   */
  ngOnInit() {
    const source$ = fromEventPattern(
      this.addClickHandler,
      this.removeClickHandler
    );
    const subscripttion = source$.subscribe(event => {
      console.log('fromEventPattern click!!!!');
    });

    setTimeout(() => {
      subscripttion.unsubscribe();
    }, 4000);
  }

  addClickHandler(handler): void {
    console.log('addClickHandler GOGO');
    const button = document.getElementsByClassName('test');
    button[0].addEventListener('click', event => handler(event));
  }

  removeClickHandler(handler): void {
    console.log('removeClickHandler GOGO');
    document.removeEventListener('click', handler());
  }
}
