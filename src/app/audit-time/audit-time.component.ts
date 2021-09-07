import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { auditTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styleUrls: ['./audit-time.component.css']
})
export class AuditTimeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
     * auditTime是事件發生後的指定時間內取樣
     * 而sampleTime是週期循環取樣
     * auditTime就是事件發生後，會等待指定時間，然後從Observable這段期間內最後一次的事件資料流當結果
     */
    interval(1000)
      .pipe(
        take(5),
        auditTime(1500)
      )
      .subscribe(data => {
        console.log('auditTime = ' + data);
      });
  }
}
