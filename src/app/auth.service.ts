import { Injectable } from '@angular/core';
import { Auth } from '@axioms/web-js';
import config from '../../config.json';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() { }

  $auth() {
    return new Auth({
      axioms_domain: config.axioms_domain,
      response_type: config.response_type,
      redirect_uri: config.redirect_uri,
      post_logout_uri: config.post_logout_uri,
      client_id: config.client_id,
      scope: config.scope,
      post_login_navigate: "/dashboard",
    });
  }
}
