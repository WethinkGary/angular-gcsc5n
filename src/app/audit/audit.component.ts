import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { audit, auditTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * audit可以自行寫Observable or Promise 來決定下次事件的發生時機
     *
     * 當來源Observable有資料流時，就會去訂閱durationSelector的Observable
     * 在durationSelector的Observable有新的資料流之前
     * 來源的Observalbe都不會有最終訂閱結果
     * 直到durationSelector的Observable第一筆事件流入，再把來源的Observable的最後一筆事件資料取出
     * 放在新的Observable，同時退訂durationSelector的Observable
     * 之後重複此循環
     */

    const durationSelector = value => {
      console.log('audit value = ' + value);
      return interval(value * 1200);
    };

    interval(1000)
      .pipe(
        take(5),
        audit(durationSelector)
      )
      .subscribe(data => {
        console.log('audit = ' + data);
      });
  }
}
