import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from 'src/constants/constants';
import { throwError } from 'rxjs';
import { catchError, Observable, retry } from 'rxjs';
import { EmployeesVO } from '../vo/employeesVO';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseUrl = '/api/employees/';
  private baseUrlV= '/api/vaccine/';

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'    })
  };

  
  getEmployees():Observable<any>{
    return this.http.get<any>(constants.WS.DK_SERVICE + this.baseUrl + 'findAllEmployees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  
  createEmployees(employeesVO:EmployeesVO):Observable<any>{
    return this.http.post(constants.WS.DK_SERVICE + this.baseUrl + 'create', employeesVO)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  
  updateEmployees(employeesVO: EmployeesVO): Observable<any>{
    return this.http.post(constants.WS.DK_SERVICE + this.baseUrl + 'update', employeesVO)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  
  inactiveStatusEmployees(employeesVO: EmployeesVO): Observable<any>{
    return this.http.post(constants.WS.DK_SERVICE + this.baseUrl + 'inactiveEmployees', employeesVO)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  
  findByStatusVaccine(statusVaccine: string): Observable<any>{
    return this.http.post( constants.WS.DK_SERVICE + this.baseUrl + 'findByStatusVaccine', statusVaccine)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  findEmployeesByVaccine(vaccine: string):Observable<any>{
    return this.http.post( constants.WS.DK_SERVICE + this.baseUrlV + 'findEmployeesByVaccine', vaccine)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  findEmployeesByDateVaccine(dateVaccineStart: string, dateVaccineEnd: string ):Observable<any>{
    return this.http.get( constants.WS.DK_SERVICE + this.baseUrlV + 'findEmployeesByDateVaccine?dateVaccineStart='+ dateVaccineStart +   '&dateVaccineEnd='+ dateVaccineEnd )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  loginEmployee(usser: string, pass: string):Observable<any>{
    return this.http.get(constants.WS.DK_SERVICE + this.baseUrl + 'loginEmployees?usser='+ usser + '&pass='+ pass)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateDatosEmployees(employeesVO: EmployeesVO):Observable<any>{
    return this.http.post(constants.WS.DK_SERVICE + this.baseUrl + 'updateDateEmployees', employeesVO)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
