import { Injectable } from '@angular/core';
import { studentModel } from './student-list/student.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor() { }
  studentListChange = new Subject<studentModel[]>();
  studentListFetch = new Subject<number>();
  studentAddressFetch = new Subject<string>();

  private studentList : studentModel[] = [
    {
        "first_name": "Cleon",
        "last_name": "Trewartha",
        "address": "0041 Hazelcrest Pass",
        "email": "ctrewartha0@wired.com",
        "gender": "Male",
        "ip_address": "236.122.123.164"
    },
    {
        "first_name": "Rubin",
        "last_name": "McAuslan",
        "address": "1663 Esker Place",
        "email": "rmcauslan1@columbia.edu",
        "gender": "Male",
        "ip_address": "214.43.36.10"
    },
    {
        "first_name": "Genovera",
        "last_name": "O'Hartigan",
        "address": "56163 Village Green Junction",
        "email": "gohartigan2@trellian.com",
        "gender": "Female",
        "ip_address": "53.102.208.122"
    }
  ];
  getStudentList() {
      return this.studentList.slice();
  }
  findStudent(id: number) {
    return this.studentList.slice()[id];
  }
  getStudentaddress(id: number) {
    return this.studentList.slice()[id];
  }
  addStudent(studentList: studentModel) {
      this.studentList.push(studentList);
      this.studentListChange.next(this.studentList.slice());
  }
  setStudent(studentList: studentModel[]) {
    this.studentList = studentList;
    this.studentListChange.next(this.studentList.slice());
  }
}
