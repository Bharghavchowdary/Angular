import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
  Welcome {{name}}
  </h3>
  <input type="text" [(ngModel)]="name" >
  <h2 *ngIf="name; else elseBlock ">Structural Directive</h2>  
  <ng-template #elseBlock>
  <h2>{{name}} Hidden</h2>
  </ng-template>
 
  <div *ngIf="name; then thenblock; else elseblock"></div>
  <ng-template #thenblock>
  <h2>Name Not Hidden</h2>
  </ng-template>

  <ng-template #elseblock>
  <h2>Name Hidden</h2>
  </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
 
 
 
}
