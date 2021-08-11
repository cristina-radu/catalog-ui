import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../model/teacher.model";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor() { }

  ngOnInit(): void {
    this.teachers = this.getDummyData();
  }

  getDummyData() {
    return [{"id":1,"firstName":"FirstName1","lastName":"LastName1","subjects":[],"employmentDate":"2021-08-10","birthDate":"2021-08-10","cnp":"2344565748391","salary":99999}
    ,{"id":2,"firstName":"FirstName2","lastName":"LastName2","subjects":[],"employmentDate":"2021-08-10","birthDate":"2021-08-10","cnp":"2344565748392","salary":99999},
      {"id":3,"firstName":"FirstName3","lastName":"LastName1","subjects":[],"employmentDate":"2021-08-10","birthDate":"2021-08-10","cnp":"2344565748393","salary":99999},
      {"id":4,"firstName":"FirstName4","lastName":"LastName4","subjects":[],"employmentDate":"2021-08-10","birthDate":"2021-08-10","cnp":"2344565748394","salary":99999},
      {"id":5,"firstName":"FirstName5","lastName":"LastName5","subjects":[],"employmentDate":"2021-08-10","birthDate":"2021-08-10","cnp":"2344565748395","salary":99999}]
  }
}
