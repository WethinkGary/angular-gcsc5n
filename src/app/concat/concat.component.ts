import { Component, OnInit } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const sourceA$ = of(1, 2);
    const sourceB$ = of(3, 4);
    const sourceC$ = of(5, 6);
    /**
     * 可以將多個Obserable連結再一起 不過要等到一個訂閱結束 才會輪下一個
     * 所以一定要記得結束訂閱 才會往下走
     */
    concat(sourceA$, sourceB$, sourceC$).subscribe(data => {
      console.log('ConcatComponent = ' + data);
    });
  }
}
