import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Roles } from '../../../core/enums/roles';
import { TokenService } from '../services/token.service';

export const adminRoleGuard: CanActivateFn = () => {
  const router = inject(Router);
  const storageRole = inject(TokenService);
  const user = storageRole.getRoleAndName();

  if (user?.role === Roles.admin) {
    return true;
  }
  return router.parseUrl('/home');
};
