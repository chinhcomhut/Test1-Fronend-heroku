import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  returnUrl: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
loginForm = new FormGroup({
  username: new FormControl('', [
    Validators.required,
    Validators.minLength(4)]),
  password: new FormControl('')
});
  constructor(private authService: AuthService, private router: Router,
              private tokenStorage: TokenStorageService, private route: ActivatedRoute) {}

  ngOnInit() {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getAuthorities();
    return this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  reloadPage() {
    window.location.reload();
  }
  signIn() {
    const {username, password} = this.loginForm.value;
    const authLoginInfo = new AuthLoginInfo(username, password);
    this.authService.attemptAuth(authLoginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveAuthorities(data.roles);
        this.tokenStorage.saveUsername(data.username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
      }
    );
  }
  }

  // onSubmit() {
  //   console.log(this.form);
  //
  //   this.loginInfo = new AuthLoginInfo(
  //       this.form.username,
  //       this.form.password);
  //
  //   this.authService.attemptAuth(this.loginInfo).subscribe(
  //       data => {
  //         this.tokenStorage.saveToken(data.accessToken);
  //         this.tokenStorage.saveUsername(data.username);
  //         this.tokenStorage.saveAuthorities(data.roles);
  //
  //         this.isLoginFailed = false;
  //         this.isLoggedIn = true;
  //         this.roles = this.tokenStorage.getAuthorities();
  //         // this.reloadPage();
  //         alert('Login success!!!');
  //         this.route.navigate(['/user']);
  //         window.location.reload();
  //       },
  //       error => {
  //         console.log(error);
  //         this.errorMessage = error.error.message;
  //         this.isLoginFailed = true;
  //         alert('Login Failed!!! Please login again! ');
  //         this.reloadPage();
  //       }
  //   );
  // }

//   reloadPage() {
//     window.location.reload();
//   }
// }
