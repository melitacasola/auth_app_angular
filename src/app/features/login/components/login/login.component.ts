import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  private loginService = inject(AuthService);
  private router = inject(Router);

  public loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login() {
    const loginValue = { ...this.loginForm.value };
    this.loginService.login(loginValue).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: () => alert('User not Found'),
    });
  }
}
