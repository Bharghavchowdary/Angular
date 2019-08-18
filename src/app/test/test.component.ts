import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
  <h4 [style.color]="hasError ? 'red' : 'orange'">Style Binding 1</h4> 
  <h4 [style.color]="highlightColor">Style Binding 2</h4> 
  <h4 [ngStyle]="titleStyle">Style Binding 3</h4> 
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name="Bharghav";
public hasError=false;
public highlightColor="green";
public titleStyle={
  color:"blue",
  fontStyle:"italic"
}
  constructor() { }

  ngOnInit() {
  }
 
}
