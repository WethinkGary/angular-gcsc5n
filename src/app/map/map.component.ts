import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    of(1, 2, 3, 4)
      .pipe(
        map((value: number) => {
          return value * 2;
        })
      )
      .subscribe(value => {
        console.log('map = ' + value);
      });

    /**
     * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
     *
     * ...Array or ...Object
     * 把這個想成 typescript會把裡面的東西拿出來
     * copy一份新的
     *
     */
    const array = ['dom', 'es2015.promise', 'es5'];
    console.log('typescript = ', ...array);
    console.log('typescript = ', array);
    const studentScore = [
      { name: '小名', source: 100 },
      { name: '小李', source: 60 },
      { name: '小王', source: 36 }
    ];

    of(...studentScore)
      .pipe(
        map((value, index) => {
          console.log('map', value);
          return {
            name: value.name,
            source: Math.sqrt(value.source)
          };
        })
      )
      .subscribe(data => {
        console.log('算完後', data);
      });
  }
}
