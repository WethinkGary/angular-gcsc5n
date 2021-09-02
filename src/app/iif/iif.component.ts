import { Component, OnInit } from '@angular/core';
import { iif, of } from 'rxjs';

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.css']
})
export class IifComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.isData(1).subscribe(data => {
      console.log('isData = ' + data);
    });

    this.isData(0).subscribe(data => {
      console.log('isData = ' + data);
    });
  }

  isData(data: number) {
    return iif(() => data === 0, of('iff sucess'), of('nothing'));
  }
}
