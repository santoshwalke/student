import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentListService } from '../student-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
      private studentListService: StudentListService, 
      private router: Router, 
      private route: ActivatedRoute,
      private dataServiceService: DataServiceService) { }

  studentForm: FormGroup;
  genders = ['Male', 'Female'];
  
  ngOnInit() {
      this.studentForm = new FormGroup({
          'first_name': new FormControl(null, [Validators.required]),
          'last_name': new FormControl(null, [Validators.required]),
          'address': new FormControl(null, [Validators.required]),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'gender': new FormControl('Male')
      })
  }

  onSubmitStudent() {    
    this.studentListService.addStudent(this.studentForm.value);
    this.dataServiceService.storeStudent()
    .subscribe(
        (response) => {
            console.log(response);
        }
    );
    this.router.navigate(['/dashbord'], {relativeTo: this.route});
    //this.router.navigate(['/dashbord']);
  }

}
