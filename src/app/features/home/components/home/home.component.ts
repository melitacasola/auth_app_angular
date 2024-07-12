import { Component, inject } from '@angular/core';
// import { AuthService } from '../../../login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    // this.authService.logout();
    this.router.navigate(['./login']);
  }
}
