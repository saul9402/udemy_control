import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-single-course',
  templateUrl: './add-single-course.component.html',
  styleUrls: ['./add-single-course.component.css']
})
export class AddSingleCourseComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
