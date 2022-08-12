import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeesVO } from 'src/app/vo/employeesVO';
import { VaccineVO } from 'src/app/vo/vaccineVO';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {
  public vaccineVO = new VaccineVO;
  public employeesVO= new EmployeesVO;
  public lstEmployees: Array<EmployeesVO>=[];
  public lstVaccines: Array<VaccineVO>=[];
  public statusVaccine: string="";
  public typeVaccine: string="";
  public dateStart: string="";
  public dateEnd: string="";
  



  constructor(
    private employeesService: EmployeesService,
  
  ) { }

  ngOnInit(): void {
  }
  
  buscar(){
    console.log(this.typeVaccine);
    console.log(this.statusVaccine);
    console.log(this.dateStart);
    console.log(this.dateEnd);
    this.lstEmployees= [];
    this.lstVaccines=[];

    if(this.typeVaccine){
      this.employeesService.findEmployeesByVaccine(this.typeVaccine).subscribe(data => {
        this.lstVaccines = data;
        console.log(this.lstVaccines);
      });
    }else if(this.statusVaccine){
      this.employeesService.findByStatusVaccine(this.statusVaccine).subscribe(data => {
        this.lstEmployees = data;
        console.log(this.lstEmployees);
      });
    }else if(this.dateStart && this.dateEnd){
      this.employeesService.findEmployeesByDateVaccine(this.dateStart, this.dateEnd).subscribe(data => {
        this.lstVaccines = data;
        console.log(this.lstVaccines);
      });
    }else {
      this.employeesService.getEmployees().subscribe(data => {
        this.lstEmployees = data;
        console.log(this.lstEmployees);
      });
    }
    
    this.typeVaccine="";
    this.statusVaccine="";
    this.dateStart="";
    this.dateEnd="";
  }
  
}
