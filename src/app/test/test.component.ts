import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h1>
  HAI
  </h1>`,
  styles: [`h1{
    color:red
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
