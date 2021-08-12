import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Teacher} from "../../model/teacher.model";

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent implements OnInit {
  @Input() teacher:Teacher = new Teacher();
  constructor() { }

  ngOnInit(): void {
  }

  onTeacherSubmit(teacherForm: NgForm) {
    if(!teacherForm.valid){
      return;
    }
    /*teacherForm.*/
    console.log("send request");
  }
}
