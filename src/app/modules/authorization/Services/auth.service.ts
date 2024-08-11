import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './CustomAuthConfig';
import { Users } from '../../shared/Model/Users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oAuthService: OAuthService, private router: Router) {
    this.initConfiguration();
  }

  initConfiguration() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();

  }

  login() {
    this.oAuthService.initImplicitFlow();
  }


  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    return this.oAuthService.getIdentityClaims();
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }

  getLoginUser(): Users | any {
    return this.getProfile();
  }

  isLogin(): boolean {
    return this.getLoginUser() != null;
  } 
}
