import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  constructor() { }

  getEmployees(){
return[
  {"id":1,"name":"Adam","age":10},
  {"id":2,"name":"Batman","age":20},
  {"id":3,"name":"Chrales","age":30},
  {"id":4,"name":"Dunkin","age":40}
];

  }
}
