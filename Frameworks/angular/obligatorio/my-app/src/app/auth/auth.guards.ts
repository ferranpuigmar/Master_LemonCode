import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const redirectAuthenticatedToDashboardGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogged() ? router.parseUrl('/dashboard') : true;
};

export const privateOnlyActivateChildGuard: CanActivateChildFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogged() ? true : router.parseUrl('/login');
};
