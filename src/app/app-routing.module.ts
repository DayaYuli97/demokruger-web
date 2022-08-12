import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReportsComponent } from './modules/admin-reports/admin-reports.component';
import { EmployeeInfoComponent } from './modules/employee-info/employee-info.component';
import { EmployeesComponent } from './modules/employees/employees.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'employees', component:EmployeesComponent},
{path: 'admin-reports', component:AdminReportsComponent},
{path: 'employee-info', component:EmployeeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
