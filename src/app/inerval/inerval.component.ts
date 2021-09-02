import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-inerval',
  templateUrl: './inerval.component.html',
  styleUrls: ['./inerval.component.css']
})
export class InervalComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const subscripttion = interval(1000).subscribe(data => {
      console.log('interval GOGO = ' + data);
    });

    setTimeout(() => {
      subscripttion.unsubscribe();
    }, 3000);
  }
}
