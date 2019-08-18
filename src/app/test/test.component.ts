import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
  <input type="text" [(ngModel)]="color" >
 
  <div [ngSwitch]="color">
<div *ngSwitchCase="'red'">You picked Red</div>
<div *ngSwitchCase="'blue'">You picked Blue</div>
<div *ngSwitchCase="'green'">You picked Green</div>
<div *ngSwitchDefault>Pick Again</div>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
 
 
 
}
