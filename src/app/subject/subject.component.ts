import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  source$: Subject<any>;
  constructor() {}

  ngOnInit() {
    /*
      Observable和Subject最大不同
      Observable每產生一次資料 都會是獨立的資料流 又稱單播
      Observable在建立物件同時 就已經預設好資料流向
      Subject每產生一次資料 都會是同步傳遞的資料流 又稱多播
      Subject在產生物件後才決定資料流向，適合跟後端互動
    */
    this.source$ = new Subject();
    this.source$.subscribe(data => {
      console.log('Subject One ' + data);
    });
    this.source$.next('1');
    this.source$.next('2');

    this.source$.subscribe(data => {
      console.log('Subject Tow ' + data);
    });
    this.source$.next('3');
    this.source$.next('4');
    this.source$.complete();
  }
}
