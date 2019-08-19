import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>  
  <button (click)="fireEvent($event)">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
 
//From parent to child
  //@Input() public parentData;
  @Input('parentData') public name;
//From Child to Parent
 @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 
  fireEvent(event){
this.childEvent.emit('HEY From Child '+event.type);
  }
 
}
