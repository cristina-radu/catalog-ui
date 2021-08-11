import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../model/teacher.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UrlService} from "../../service/url.service";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.httpClient.get<Teacher[]>(environment.baseUrl + environment.teacherListUrl, this.urlService.getRequestOptions()).subscribe(
      response => {
        this.teachers = response;
      },
      () => {
        console.log("Something went wrong when retrieving the list of teachers.")
      }
    )
  }

  onTeacherListChanged() {
    this.getTeachers();
  }
}
