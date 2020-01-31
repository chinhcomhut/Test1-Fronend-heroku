import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private route: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
        this.form.username,
        this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.roles);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          // this.reloadPage();
          alert('Login success!!!');
          this.route.navigate(['/user']);
          window.location.reload();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
          alert('Login Failed!!! Please login again! ');
          this.reloadPage();
        }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
