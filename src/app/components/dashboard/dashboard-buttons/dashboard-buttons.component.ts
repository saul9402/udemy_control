import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GlobalHTMLAndCSSConstants } from 'src/app/shared/constants/GlobalCSSAtributtesConstants';
import { GlobalPropertiesConstants } from 'src/app/shared/constants/GlobalPropertiesConstants';
import { AddMultipleCoursesComponent } from '../forms/add-multiple-courses/add-multiple-courses.component';
import { AddSingleCourseComponent } from '../forms/add-single-course/add-single-course.component';

@Component({
  selector: 'app-dashboard-buttons',
  templateUrl: './dashboard-buttons.component.html',
  styleUrls: ['./dashboard-buttons.component.css']
})
export class DashboardButtonsComponent implements OnInit {

  GlobalHTMLAndCSSConstants = GlobalHTMLAndCSSConstants;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(event) {
    /**
     * https://stackoverflow.com/questions/36006894/angular2-get-clicked-element-id
     */
    let component: any = this.getComponentToOpen(event);
    /**
     * https://ng-bootstrap.github.io/#/getting-started
     * https://ng-bootstrap.github.io/#/components/modal/api
     * https://demos.wrappixel.com/premium-admin-templates/angular/adminpro-angular/docs/docs-ui-modals.html
     */
    this.modalService.open(component)
      .result
      .then((result) => {
        console.log(result);
      }).catch(error => {
        console.log(error);
      });
  }


  private getComponentToOpen(event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idValue = target.attributes.id.nodeValue;
    let component: any;
    if (idValue == GlobalHTMLAndCSSConstants.ID_MULTIPLE_COURSES_BUTTON) {
      component = AddMultipleCoursesComponent;
    } else {
      component = AddSingleCourseComponent;
    }
    return component;
  }
}
