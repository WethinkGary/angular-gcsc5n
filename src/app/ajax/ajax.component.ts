import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // 1 URL會被擋CORS
    const source$ = new Observable(subscriber => {
      fetch('https://images.google.com/')
        .then(resp => {
          resp.json();
        })
        .then(body => {
          subscriber.next(body);
          subscriber.complete();
        });
    });

    source$.subscribe(data => {
      console.log('AjaxComponent data = ' + data);
    });

    // 2 URL會被擋CORS
    const source2$ = ajax({ url: 'https://images.google.com/', method: 'GET' });
    source2$.subscribe(data => {
      console.log('source2$ data = ' + data);
    });

    // 3 URL會被擋CORS 只取body
    const source3$ = ajax.getJSON('https://images.google.com/');
    source3$.subscribe(data => {
      console.log('source2$ data = ' + data);
    });
  }
}
