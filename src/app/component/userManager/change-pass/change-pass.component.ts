import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../../../model/userManager/ChangePassword';
import {AuthService} from '../../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  title = 'Thay Đổi Mật Khẩu';
  form: any = {};
  changePassword: ChangePassword;
  isChangePassed = false;
  errorMessage = '';

  constructor(
      private authService: AuthService,
      private router: Router) {
  }

  ngOnInit() {
  }

  ngSubmit() {
    debugger;
    this.changePassword = new ChangePassword(
        this.form.currentPassword,
        this.form.newPassword,
        this.form.confirmPassword);

    this.authService
        .changePasswordAuth(this.changePassword)
        .subscribe(
            data => {
              console.log(data);
              this.isChangePassed = true;
              alert('Bạn đã thay đổi Mật Khẩu thành công');
              this.router.navigate(['/home']);
            },
            error => {
              console.log(error);
              this.errorMessage = error.error.message,
                  alert('Bạn chưa thay đổi thành công');
            });
  }

}
