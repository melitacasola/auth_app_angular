import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Roles } from '../../../core/enums/roles';
import { TokenService } from '../../../core/services/token.service';

export const adminRoleGuard: CanActivateFn = () => {
  const storageRole = inject(TokenService);
  const user = storageRole.getRoleAndName();
  const router = inject(Router);
  if (user?.role === Roles.admin) {
    return true;
  }
  return router.parseUrl('/home');
};
