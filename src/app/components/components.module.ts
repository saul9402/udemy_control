import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';
import { AddSingleCourseComponent } from './dashboard/forms/add-single-course/add-single-course.component';
import { AddMultipleCoursesComponent } from './dashboard/forms/add-multiple-courses/add-multiple-courses.component';
import { DashboardButtonsComponent } from './dashboard/dashboard-buttons/dashboard-buttons.component';
import { PersonsButtonsComponent } from './persons/persons-buttons/persons-buttons.component';
import { PersonFormComponent } from './persons/forms/person-form/person-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    DashboardButtonsComponent,
    AddSingleCourseComponent,
    AddMultipleCoursesComponent,
    PersonsButtonsComponent,
    PersonFormComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    DashboardButtonsComponent,
    PersonsButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ComponentsModule { }
