import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { TableModule } from 'primeng/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './modules/home/home.component';
import { EmployeesComponent } from './modules/employees/employees.component';
import { EmployeesService } from './services/employees.service';
import { EmployeeInfoComponent } from './modules/employee-info/employee-info.component';
import { AdminReportsComponent } from './modules/admin-reports/admin-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeesComponent,
    EmployeeInfoComponent,
    AdminReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ModalModule.forRoot(),
  ],
  providers: [
    EmployeesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
