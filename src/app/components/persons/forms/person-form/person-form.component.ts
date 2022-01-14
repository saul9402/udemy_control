import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalPropertiesConstants } from 'src/app/shared/constants/GlobalPropertiesConstants';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonFormComponent implements OnInit {

  GlobalPropertiesConstants = GlobalPropertiesConstants;

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.personForm = this.formBuilder.group({
      id: this.formBuilder.control(null),
      firstName: this.formBuilder.control('',
        Validators.compose([
          Validators.required,
          Validators
            .minLength(GlobalPropertiesConstants.MIN_LENGTH_STRING_CONTROL),
          Validators
            .maxLength(GlobalPropertiesConstants.MAX_LENGTH_BIG_STRING_CONTROL)
        ])),
      secondName: this.formBuilder.control('',
        Validators.compose([
          Validators
            .maxLength(GlobalPropertiesConstants.MAX_LENGTH_SMALL_STRING_CONTROL)
        ])),
      firstSurname: this.formBuilder.control('',
        Validators.compose([
          Validators.required,
          Validators
            .minLength(GlobalPropertiesConstants.MIN_LENGTH_STRING_CONTROL),
          Validators
            .maxLength(GlobalPropertiesConstants.MAX_LENGTH_SMALL_STRING_CONTROL)
        ])),
      secondSurname: this.formBuilder.control('',
        Validators.compose([
          Validators.maxLength(GlobalPropertiesConstants.MAX_LENGTH_SMALL_STRING_CONTROL)
        ])),
      email: this.formBuilder.control('',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators
            .minLength(GlobalPropertiesConstants.MIN_LENGTH_EMAIL),
          Validators
            .maxLength(GlobalPropertiesConstants.MAX_LENGTH_EMAIL)
        ]))
    });


  }


  onSubmit() {

  }

}
