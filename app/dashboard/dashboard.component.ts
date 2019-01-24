import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../dashboard/student-list.service';
import { studentModel } from './student-list/student.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../shared/data-service.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
      private studentListService: StudentListService,
      private router: Router,
      private route: ActivatedRoute,
      private dataServiceService : DataServiceService,
      private authService: AuthService) { }

  studentData : studentModel;
  subscription: Subscription;

  ngOnInit() {
      this.subscription = this.studentListService.studentListChange
      .subscribe(
          (studentData: studentModel[]) => {
              this.studentData = studentData;
          }
      );
      this.studentData = this.studentListService.getStudentList();
  }

  onStudentSelected(id: number) {
    this.studentListService.studentListFetch.next(id);
  }

  addStudent() {
      this.router.navigate(['/add-student'], {relativeTo: this.route})
  }

  fetchStudent() {
      this.dataServiceService.getStudent();
  }

  logOut() {
      this.authService.logOut();
      this.router.navigate(['']);
  }

}
