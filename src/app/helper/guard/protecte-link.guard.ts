import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../modules/authorization/services/auth.service';

export const protecteLinkGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  return auth.isLogin();
};
