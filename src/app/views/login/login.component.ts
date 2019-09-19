import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {  
  loader:Boolean=false;
  loginForm: FormGroup;
  isInvalidCre:Boolean=false;
  isLogin=false;
  constructor(private router: Router, private fb: FormBuilder,
    private loginService: LoginService) {
      if(localStorage.getItem(environment.pms_user)&&localStorage.getItem(environment.pms_user)=='login'){
        this.isLogin=true;
        router.navigateByUrl('/dashboard');
      }
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
            localStorage.setItem(environment.pms_user,'login')
            this.router.navigateByUrl('/dashboard');
          }
        });
    }
  }
}
