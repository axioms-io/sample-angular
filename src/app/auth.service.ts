import { Injectable } from '@angular/core';
import Auth from '@axioms/web-js';
import { environment } from '../environments/environment';
import config from '../../config.json';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() { }

  $auth() {
    return new Auth({
      axioms_domain: config.axioms_domain,
      response_type: "id_token token",
      redirect_uri: config.redirect_uri,
      post_logout_uri: config.post_logout_uri,
      client_id: config.client_id,
      scope: "openid profile",
      post_login_navigate: "/dashboard",
    });
  }
}
