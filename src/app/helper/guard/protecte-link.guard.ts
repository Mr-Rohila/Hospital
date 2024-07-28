import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const protecteLinkGuard: CanActivateFn = (route, state) => {

  return true;
};
