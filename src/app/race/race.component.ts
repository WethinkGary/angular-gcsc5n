import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, pipe, race } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit, OnDestroy {
  alive = true;

  constructor() {}

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit() {
    /**
     * 競賽 全部訂閱然後誰先有資料誰就維持訂閱
     * 其餘就退訂
     */
    const sourceA$ = interval(1000).pipe(map(data => 'A' + data));
    const sourceB$ = interval(2000).pipe(map(data => 'B' + data));
    const sourceC$ = interval(3000).pipe(map(data => 'C' + data));

    const subscriotion = race([sourceA$, sourceB$, sourceC$])
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        console.log('race = ', data);
      });
  }
}
