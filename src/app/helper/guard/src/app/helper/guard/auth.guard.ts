import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../../../../../modules/authorization/Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {  
   const auth = inject(AuthService);
  if (auth.isLogin())
    return true;

  //save redirect URI
  localStorage.setItem('redirectURL',state.url);
  auth.login();
  return false;
};
