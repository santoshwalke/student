import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student-address',
  templateUrl: './student-address.component.html',
  styleUrls: ['./student-address.component.css']
})
export class StudentAddressComponent implements OnInit {

  studentAddress: string;
  constructor(private studentListService: StudentListService) { }

  ngOnInit() {
      this.studentListService.studentAddressFetch.
      subscribe(
          (address: string) => {
              this.studentAddress = address;
          }
      )
  }

}
