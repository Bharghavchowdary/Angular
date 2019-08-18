import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
  <input [(ngModel)]="name"  type="text" >
 {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
 
 
 
}
