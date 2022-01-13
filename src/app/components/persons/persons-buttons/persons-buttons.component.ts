import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonsComponent } from 'src/app/pages/persons/persons.component';
import { GlobalHTMLAndCSSConstants } from 'src/app/shared/constants/GlobalCSSAtributtesConstants';
import { GlobalPropertiesConstants } from 'src/app/shared/constants/GlobalPropertiesConstants';
import { PersonFormComponent } from '../forms/person-form/person-form.component';

@Component({
  selector: 'app-persons-buttons',
  templateUrl: './persons-buttons.component.html',
  styleUrls: ['./persons-buttons.component.css']
})
export class PersonsButtonsComponent implements OnInit {

  GlobalHTMLAndCSSConstants = GlobalHTMLAndCSSConstants;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(event) {


    this.modalService.open(PersonFormComponent, { size: GlobalPropertiesConstants.MODAL_SIZE_LG })
      .result
      .then((result) => {
        console.log(result);
      }).catch(error => {
        console.log(error);
      });
  }

}
