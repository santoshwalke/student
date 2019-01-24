import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRoutingModule } from './dashboard/student-routing.module';
import { StudentListComponent } from './dashboard/student-list/student-list.component';
import { StudentDetailsComponent } from './dashboard/student-details/student-details.component';
import { StudentAddressComponent } from './dashboard/student-address/student-address.component';
import { AddStudentComponent } from './dashboard/add-student/add-student.component';
import { DropDownDirective } from './shared/drop-down.directive';

const routes: Routes = [
    { path: '', component:  SignInComponent },
    { path: 'add-student', component: AddStudentComponent},
    { path: 'dashbaord', loadChildren: './dashboard/student-routing.module#StudentRoutingModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentAddressComponent,
    AddStudentComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
