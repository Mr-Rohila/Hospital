import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
    //issuer: 'http://localhost:9090',
    issuer:'https://accounts.google.com',
    redirectUri: 'http://localhost:4200/auth/login',
    postLogoutRedirectUri: 'http://localhost:4200',
    //clientId: 'HospitalClientAngular',
    clientId:'691984437061-3prchb7uniora2ck7dm0uv0u9lj1dsje.apps.googleusercontent.com',
    responseType: 'code',
    scope: 'openid profile email',
    showDebugInformation: true,
    strictDiscoveryDocumentValidation:false,
    useSilentRefresh:true
};