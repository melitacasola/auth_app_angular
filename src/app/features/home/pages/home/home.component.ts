import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '../../../../core/services/token.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private tokenService = inject(TokenService);
  public role: string = '';
  public uniqueName: string = '';
  public mensaje: string = '';

  ngOnInit(): void {
    try {
      const roleAndName = this.tokenService.getRoleAndName();
      if (roleAndName) {
        this.role = roleAndName.role;
        this.uniqueName = roleAndName.unique_name;

        if (roleAndName.role === 'Administrator') {
          this.mensaje = 'admin';
        } else {
          this.mensaje = 'customers';
        }
      }
    } catch (error) {
      console.error('Error obteniendo el rol:', error);
      this.router.navigate(['./login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }
  gotToRole = (name: string) => {
    this.router.navigate(['home/', name]);
  };
}
