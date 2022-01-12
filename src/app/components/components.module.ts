import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';
import { AddSingleCourseComponent } from './dashboard/forms/add-single-course/add-single-course.component';
import { AddMultipleCoursesComponent } from './dashboard/forms/add-multiple-courses/add-multiple-courses.component';
import { DashboardButtonsComponent } from './dashboard/dashboard-buttons/dashboard-buttons.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    DashboardButtonsComponent,
    AddSingleCourseComponent,
    AddMultipleCoursesComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    DashboardButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
