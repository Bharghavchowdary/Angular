import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `<h2>This is {{name}}
  {{name.length}}
  <br/>{{name.toUpperCase()}}
  <br/>{{grateUser()}}
  <br/>{{5+2}}
  <br/>{{siteUrl}}</h2>`,
  styles: [`h2{
    color:green;
  }`]
})
export class BindingComponent implements OnInit {
public name="interpoation";
public siteUrl=window.location.href;
  constructor() { }

  ngOnInit() {
  }
  grateUser()
  {return this.name+" "+this.name.length}
}
