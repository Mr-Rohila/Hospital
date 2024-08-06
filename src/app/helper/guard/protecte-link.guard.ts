import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../modules/authorization/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

export const protecteLinkGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  if (auth.isLogin())
    return true;

  auth.initConfiguration();
  auth.login();
  return auth.isLogin();
};


