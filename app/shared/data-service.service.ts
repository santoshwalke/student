import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { StudentListService } from '../dashboard/student-list.service';
import { studentModel } from '../dashboard/student-list/student.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
      private studentList: StudentListService, 
      private httpClient: HttpClient) { }
  storeStudent() {
      const req = new HttpRequest(
          'PUT',
          'https://studentapp-5be96.firebaseio.com/studentData.json',
           this.studentList.getStudentList(),
           {
               reportProgress: true
           });
           return this.httpClient.request(req);
    }

    getStudent() {
        this.httpClient.get<studentModel[]>('https://studentapp-5be96.firebaseio.com/studentData.json',
        {
            observe: 'body',
            responseType: 'json'
        })
        .subscribe(
            (response: studentModel[]) => {
                this.studentList.setStudent(response);
                console.log(response);
                return response;
            }
        )
    }
}
