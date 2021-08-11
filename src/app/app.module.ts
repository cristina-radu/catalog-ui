import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import {FormsModule} from "@angular/forms";
import { TeacherListComponent } from './catalog/teacher-list/teacher-list.component';
import { TeacherComponent } from './catalog/teacher-list/teacher/teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {UrlService} from "./service/url.service";
import {AddEditTeacherComponent} from "./catalog/add-edit-teacher/add-edit-teacher.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    TeacherListComponent,
    TeacherComponent,
    AddEditTeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
