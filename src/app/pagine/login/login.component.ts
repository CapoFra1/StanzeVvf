import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ILogin } from 'src/app/models/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:false
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  error: string;
  ngOnInit(): void {
    this.auth.$error.subscribe((err) => {
      this.error = err;
    });
  }

  onSubmit(form: NgForm) {
    this.auth
      .login(form.value.username, form.value.password)
      .subscribe((data: any) => {
        if (data.token) {
          localStorage.setItem('TOKEN_KEY', data.token);
          this.router.navigateByUrl('/home');
        }
      });
    form.reset();
  }
}
