import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() { }
    // onAvatar($event) {
    //     this.signupInfo.avatarUrl = $event;
    // }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
        this.form.name,
        this.form.username,
        this.form.email,
        this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          alert('Creat Account Success!!');
          this.route.navigate(['/']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          alert('Create Account Failed! Please Create Account Again!');
        }
    );
  }
}
