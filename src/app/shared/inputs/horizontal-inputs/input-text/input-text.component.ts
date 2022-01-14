import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { GlobalHTMLAndCSSConstants } from "src/app/shared/constants/GlobalCSSAtributtesConstants";

@Component({
  selector: "app-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.css"],
})
export class InputTextComponent implements OnInit {
  GlobalHTMLAndCSSConstants = GlobalHTMLAndCSSConstants;

  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() isRequired: boolean = false;

  ID_VALID_FEEDBACK: string;
  ID_INVALID_FEEDBACK: string;

  constructor() {}

  ngOnInit(): void {}

  createIdInvalidFeedBack(): void {
    this.ID_INVALID_FEEDBACK = `${GlobalHTMLAndCSSConstants.CLASS_VALIDATION_FEEDBACK_INVALID}-${this.controlName}`;
  }
  createIdValidFeedBack(): void {
    this.ID_VALID_FEEDBACK = `${GlobalHTMLAndCSSConstants.CLASS_VALIDATION_FEEDBACK_VALID}-${this.controlName}`;
  }

  evaluateIsValid(): string {
    let classToApply: string = "";
    if (
      (this.form.get(this.controlName).touched ||
        this.form.get(this.controlName).dirty) &&
      this.form.get(this.controlName).errors
    ) {
      classToApply = GlobalHTMLAndCSSConstants.CLASS_IS_INVALID;
    } else if (
      (this.form.get(this.controlName).touched ||
        this.form.get(this.controlName).dirty) &&
      !this.form.get(this.controlName).errors
    ) {
      classToApply = GlobalHTMLAndCSSConstants.CLASS_IS_VALID;
    }
    return classToApply;
  }
}
