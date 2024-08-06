import { Injectable } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Users } from '../../shared/model/Users';
import {  OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './CustomAuthConfig';

@Injectable({
  providedIn: 'root'
})
export class  AuthService {

  constructor(private storage: StorageService, private oAuthService: OAuthService) { }

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
    const profile = this.oAuthService.getIdentityClaims();
    console.log("User profile, %d", profile);
    return profile;
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }

  getLoginUser(): Users | any {
    const token=this.getToken();
    console.log("Access Token %d",token);
    return this.getProfile();
  }

  isLogin(): boolean {
    return this.getLoginUser() != null;
  }
}
