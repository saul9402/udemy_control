import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
