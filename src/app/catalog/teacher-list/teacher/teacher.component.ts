import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input() teacher:Teacher = new Teacher();
  @Output() teacherListChanged = new EventEmitter();

  constructor(public httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  deleteTeacher() {
    this.httpClient.delete(environment.baseUrl + environment.deleteTeacherUrl.replace('{id}', this.teacher.id + '')).subscribe(
      response => {
        this.teacherListChanged.next();
      },
      () => {
        console.log("Error when deleting teacher with first name: "+ this.teacher.firstName);
      }
    )
  }
}
