import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLoginGoogle]',
})
export class LoginGoogleDirective {
  @HostListener('click', ['$event'])
  async clickEvent(e: MouseEvent) {
    e.preventDefault();
    await this.authService.loginWithGoogle();
    this.router.navigate(['/dashboard/customers']);
  }

  constructor(private authService: AuthService, private router: Router) {}
}
