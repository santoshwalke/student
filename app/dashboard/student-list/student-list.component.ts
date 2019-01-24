import { Component, OnInit, Input } from '@angular/core';
import { studentModel } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    @Input() studentLists: studentModel;
    @Input() index: number;

  constructor() { }
  
  ngOnInit() {}

}
