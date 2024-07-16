import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const PublicGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogged().pipe(
    tap(isAuth => console.log('Authentication Status:', isAuth)),
    map(isAuth => {
      if (isAuth) {
        router.navigate(['/home']);
        return false; // If logged in, do not allow access to the route
      } else {
        return true; // If not logged in, allow access to the route
      }
    }),
  );
};
