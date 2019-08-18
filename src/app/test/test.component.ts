import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h1>
  HAI  
  </h1>
  <input (change)="change()" [id]="myId" type="text" value="Bharghav">
  <input [disabled]="isDiabled" id="{{myId}}" type="text" value="Bharghav">`,
  styles: [`h1{
    color:red
  }`]
})
export class TestComponent implements OnInit {
public myId="testId";
public isDiabled=true;
  constructor() { }

  ngOnInit() {
  }
  change()
  {
    return this.isDiabled=!this.isDiabled;
  }
}
