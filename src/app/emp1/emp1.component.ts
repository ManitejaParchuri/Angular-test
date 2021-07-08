import { Component, OnInit } from '@angular/core';
import { Emp1Service } from '../services/emp1.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component  {

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
