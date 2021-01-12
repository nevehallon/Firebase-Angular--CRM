import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogout]',
})
export class LogoutDirective {
  @HostListener('click', ['$event'])
  async clickEvent(e: MouseEvent) {
    e.preventDefault();
    await this.authService.logout();
    this.router.navigate(['/']);
  }

  constructor(private authService: AuthService, private router: Router) {}
}
