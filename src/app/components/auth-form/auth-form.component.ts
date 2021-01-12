import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };

  async onSubmit() {
    await this.authService.loginWithEmail(this.form.email, this.form.password);
    this.router.navigate(['/dashboard/customers']);
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
