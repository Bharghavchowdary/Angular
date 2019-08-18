import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
 <button (click)=gettext()>Click</button>
 <button (click)=getevent($event)>event</button>
 <button (click)="greeting='welcome Bharghav'">Greet</button>
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
  gettext(){
return this.greeting=this.name;
  }
  getevent(event){
    return this.greeting=event.type;
  }
 
}
