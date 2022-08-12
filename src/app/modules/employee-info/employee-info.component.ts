import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeesVO } from 'src/app/vo/employeesVO';
import { VaccineVO } from 'src/app/vo/vaccineVO';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})

export class EmployeeInfoComponent implements OnInit {
  public usser: string="";
  public pass: string="";
  public lstEmployees: Array<EmployeesVO>=[];
  public lstVaccines: Array<VaccineVO>=[];
  public employeesVO= new EmployeesVO;
  public vaccineVO= new VaccineVO;
  public isLogin: boolean=false;
  public isVaccine: boolean=false;


  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit(): void {
    this.isLogin=false;
    this.isVaccine=false;
  }

  loginEmployees(){
    console.log(this.usser);
    console.log(this.pass);
    this.employeesVO= new EmployeesVO;
    
    if(this.usser && this.pass){
      this.employeesService.loginEmployee(this.usser, this.pass).subscribe(data => {
        this.isLogin=true;
        this.employeesVO = data;
        console.log(this.employeesVO);
      });
    }else {
      
        console.log("no existe");
      
    }
    
    this.usser="";
    this.pass="";
  }
  
  updateDatoEmployees(){
    if(this.isVaccine){
      this.employeesVO.vaccineVO=this.vaccineVO;
    }
    
    this.employeesService.updateDatosEmployees(this.employeesVO).subscribe(data =>{
      if(data === true){
        this.isLogin=false;
        this.employeesVO = new EmployeesVO();
        
        this.vaccineVO= new VaccineVO;
        
      }
    });
  }
   
  

  change(event:any){
    console.log(event)
    if(event==='SI'){
      this.isVaccine=true;
      
    }else {
      this.isVaccine=false;
    }
    
  }

}
