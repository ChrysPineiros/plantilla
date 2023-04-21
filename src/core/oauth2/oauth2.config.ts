import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.sso.issuer,
  strictDiscoveryDocumentValidation: environment.sso.strictDiscoveryDocumentValidation,
  redirectUri: environment.sso.redirectUri,
  clientId: environment.sso.clientId,
  scope: environment.sso.scope
};
