import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
  <input #myInput type="text" >
 <button (click)=gettext(myInput.value)>Click</button>
 {{greeting}}
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name="Bharghav";
public greeting;
  constructor() { }

  ngOnInit() {
  }
  gettext(value){
return this.greeting=value;
  }
 
 
}
