import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
