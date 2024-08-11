import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'http://localhost:9090',
    redirectUri: 'http://localhost:4200/auth/login',
    postLogoutRedirectUri: 'http://localhost:4200',
    clientId: 'HospitalClientAngular',
    responseType: 'code',
    scope: 'openid profile email',
    showDebugInformation: true,
    strictDiscoveryDocumentValidation: false,
    useSilentRefresh: true
};