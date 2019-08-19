import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>  Welcome {{name}}  </h3>  
  <h3>   {{name | lowercase}}  </h3>
  <h3>   {{name | uppercase}}  </h3> 
  <h3>   {{message | titlecase}}  </h3>
  <h3>   {{name | slice:3}}  </h3>
  <h3>   {{name | slice:3:5}}  </h3> 
  <h3>   {{person | json}}  </h3>

  <h3>   {{5.1234 | number:'1.2-3'}}  </h3>
  <h3>   {{5.1234 | number:'3.4-5'}}  </h3>
  <h3>   {{5.1234 | number:'3.5-6'}}  </h3>

  <h3>   {{0.25 | percent}}  </h3>
  <h3>   {{0.25 | currency}}  </h3>
  <h3>   {{0.25 | currency:'INR':'code'}}  </h3>

  <h3>   {{date | date}}  </h3>
  <h3>   {{date | date:'short'}}  </h3>
  <h3>   {{date | date:'shortDate'}}  </h3>
  <h3>   {{date | date:'shortTime'}}  </h3>

  `,
  styles: []
})
export class TestComponent implements OnInit {
 
public name ="Bharghav";
public message ="Welcome to angular";
public person ={
  "firstName":"Siva",
  "LastName":"Sai"
};
public date=new Date();

  constructor() { }

  ngOnInit() {
  }
 
 
}
