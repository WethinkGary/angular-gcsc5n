import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  constructor() {}
  /**
   * start:從哪個數字開始
   * count:建立多少數值的數列
   */
  ngOnInit() {
    range(1, 10).subscribe(data => {
      console.log('Range = ' + data);
    });
  }
}
