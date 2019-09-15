import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {  
  loader:Boolean=false;
  loginForm: FormGroup;
  isInvalidCre:Boolean=false;
  constructor(private router: Router, private fb: FormBuilder,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  public LoginClick() {
    this.isInvalidCre=false;
    if (this.loginForm.valid) {
      this.loader=true;
      this.loginService.login(this.loginForm.value)
        .subscribe(res => {
          this.loader=false;
          if (res['status'] == 'invalid') {
               this.isInvalidCre=true;
          } else {
            this.router.navigateByUrl('/dashboard');
          }
        });
    }
  }
}
