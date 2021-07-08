import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class Emp1Service {

  url:string = 'assets/employe1.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getEmployeesInfo():Observable<any>{
     return this.httpClient.get(this.url)
  }
}
