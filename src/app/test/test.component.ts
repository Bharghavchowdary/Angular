import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
  <h4 class="text-sucess">{{name}}</h4>
  <h4 [class]="sucessClass">{{name}}</h4>
  <h4 [class]="sucessClass" class="text-special">{{name+" Not Applyed Styling"}}</h4>
  <h4 [class.text-error]="hasError">{{name}}</h4>
  <h4 [ngClass]="messageClass1">{{name}}</h4>
  <h4 [ngClass]="messageClass2">{{name}}</h4>
  `,
  styles: [`.text-sucess{
    color:green;
  }
  .text-error{
    color:red;
  }
  .text-special{
    font-style:italic;
  }`]
})
export class TestComponent implements OnInit {
  public name="Bharghav";
public sucessClass="text-sucess";
public hasError=true;
public isSpecial=true;
public messageClass1={
  "text-sucess":this.hasError,
  "text-error":!this.hasError,
  "text-special":this.isSpecial
}
public messageClass2={
  "text-sucess":!this.hasError,
  "text-error":this.hasError,
  "text-special":this.isSpecial
}
  constructor() { }

  ngOnInit() {
  }
 
}
