import { Injectable } from "@angular/core";
import { VaccineVO } from "./vaccineVO";

@Injectable()
export class EmployeesVO{

    public idEmployes?:string;
    public idCard?:string;
    public name?:string;
    public lastname?:string;
    public mail?:string;
    public dateBirth?:Date;
    public address?:string;
    public cellphone?:string;
    public vaccineStatus?:Date;
    public usser?:string;
    public pass?:string;
    public status?:boolean;
    public vaccineVO?: VaccineVO;
}
