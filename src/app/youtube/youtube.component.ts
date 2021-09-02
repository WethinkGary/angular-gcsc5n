import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  youtubeA$: Subject<string>;
  youtubeB$: Subject<string>;
  sendNewElement: HTMLButtonElement;
  unSendAElement: HTMLButtonElement;
  unSendBElement: HTMLButtonElement;
  newAElement: HTMLButtonElement;
  newBElement: HTMLButtonElement;
  count = 0;
  constructor() {}

  ngOnInit() {
    this.sendNewElement = document.querySelector('#sendNew');
    this.unSendAElement = document.querySelector('#unSendA');
    this.unSendBElement = document.querySelector('#unSendB');
    this.newAElement = document.querySelector('#newA');
    this.newBElement = document.querySelector('#newB');
    this.youtubeA$ = new Subject();
    this.youtubeB$ = new Subject();
    fromEvent(this.sendNewElement, 'click').subscribe(() => {
      console.log('this.count = ' + this.count);
      this.youtubeA$.next('最新一集上線囉!!!' + ++this.count);
      this.youtubeB$.next('最新一集上線囉!!!' + ++this.count);
    });
    // 取消訂閱A
    fromEvent(this.unSendAElement, 'click').subscribe(() => {
      this.youtubeA$.complete();
    });
    // 取消訂閱B
    fromEvent(this.unSendBElement, 'click').subscribe(() => {
      this.youtubeB$.complete();
    });

    // 觀察者A
    this.youtubeA$.subscribe(
      (data: string) => {
        this.newAElement.innerHTML = data;
      },
      error => {},
      () => {}
    );
    // 觀察者B
    this.youtubeB$.subscribe(
      (data: string) => {
        this.newBElement.innerHTML = data;
      },
      error => {},
      () => {}
    );
  }
}
