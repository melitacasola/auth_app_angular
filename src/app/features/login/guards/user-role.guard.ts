import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Roles } from '../../../core/enums/roles';

export const userRoleGuard: CanActivateFn = () => {
  const storageRole = inject(TokenService);
  const router = inject(Router);
  const user = storageRole.getRoleAndName();

  if (user?.role === Roles.user) {
    return true;
  }
  return router.parseUrl('/home');
};
