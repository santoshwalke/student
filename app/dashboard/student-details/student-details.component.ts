import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { studentModel } from '../student-list/student.model';
import { StudentListService } from '../student-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

    subscription: Subscription;
    studentDetails: studentModel;

  constructor(
      private studentListService: StudentListService) { }
  
  ngOnInit() {
    this.subscription = this.studentListService.studentListFetch
    .subscribe(
        (index: number) => {
            this.studentDetails = this.studentListService.findStudent(index);
        }
    )
  }
  getAddress(address: string) {
      this.studentListService.studentAddressFetch.next(address);
  }

}
