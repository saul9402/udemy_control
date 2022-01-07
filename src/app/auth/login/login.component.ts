import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { GlobalPropertiesConstants } from 'src/app/shared/constants/GlobalPropertiesConstants';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  year: number = new Date().getFullYear();

  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(1)]],
    grant_type: ['password']
  });

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    localStorage.removeItem(GlobalPropertiesConstants.PROPERTY_TOKEN);
  }

  login() {
    this.userService.login(this.loginForm.value)
      .subscribe(resp => { }, err => {
        Swal.fire('Error', err, 'error');
      })
  }

}
