import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeesVO } from 'src/app/vo/employeesVO';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employeesVO: EmployeesVO = new EmployeesVO();
  public lstEmployees: Array<EmployeesVO>=[];
  public isActivate:boolean=false;
  private patternOnlyNumbers = /^[0-9]/;
  private patternOnlyLetters = /^[a-zñA-ZÑáéíóúÁÉÍÓÚ ]/;

  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit(): void {
  }

  openModal(modal: ModalDirective, row: any) {
    if (row === null || row === undefined) {
      this.employeesVO = new EmployeesVO();
      modal.show();
    } else {
      this.employeesVO = Object.assign({}, row);
      modal.show();
    }

  }

  closeModal(modal: ModalDirective) {
    modal.hide();
  }

  employees(){
    this.employeesService.getEmployees().subscribe(data => {
      this.lstEmployees = data;
      console.log(this.lstEmployees);
    })
  }

  createEmployees(modal: ModalDirective){
    console.log(this.employeesVO);
    if(this.employeesVO.idCard &&  this.employeesVO.name && this.employeesVO.lastname && this.employeesVO.mail ){
      if(this.employeesVO.idEmployes === undefined){
        this.employeesService.createEmployees(this.employeesVO).subscribe(response =>{
          console.log(response);
          if(response === true){
            modal.hide();
            this.employeesVO = new EmployeesVO();
            this.employees();
          }
        });
      }else{
      
      this.employeesService.updateEmployees(this.employeesVO).subscribe(response =>{
        if(response === true){
          modal.hide();
          this.employeesVO = new EmployeesVO();
          this.employees();
        }
      }); 
    }
    }else{
      alert("por favor llene los datos correctamente");
    }
    
    }

    onlyPositiveNumbers(event: any) {
      let inputChar = String.fromCharCode(event.charCode);
      if (event.charCode != 0) {
          if (!this.patternOnlyNumbers.test(inputChar.toString())) {
              event.preventDefault();
          }
      }
  }

  onlyLetters(event: any) {
    let inputChar = String.fromCharCode(event.charCode);
    if (event.charCode != 0) {
        if (!this.patternOnlyLetters.test(inputChar.toString())) {
            event.preventDefault();
        }
    }
}

    openOptionsEmployees(modal: ModalDirective, employeesVO: any, isActivate: boolean) {
      this.isActivate = isActivate;
      this.employeesVO = Object.assign({}, employeesVO);
      modal.show();
    }
      
  acceptDialogActivateDesactivate(modal: ModalDirective) {
    this.employeesVO.status = !this.employeesVO.status;
    this.employeesService.inactiveStatusEmployees(this.employeesVO).subscribe(response => {
      if (response) {
        this.employees();
        console.log("El estado del empleado se cambio correctamente.");
      } else {
        console.log("No se pudo cambiar el estado del empleado");
      }
    });
    modal.hide();
  }

}
