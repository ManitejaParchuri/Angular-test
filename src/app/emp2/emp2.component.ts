import { Component, OnInit } from '@angular/core';
import { Emp1Service } from '../services/emp1.service';


@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component  {
  filteredString:string='';
  emp:any=[];
  errMsg:any;
  constructor(proService:Emp1Service){
    proService.getEmployeesInfo().subscribe(
      result => this.emp = result,
      error => this.errMsg = error
    )
    }
}
