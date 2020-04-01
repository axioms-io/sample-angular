import { Injectable } from '@angular/core';
import { Auth } from '@axioms/web-js';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() { }

  $auth() {
    return new Auth({
      axioms_domain: process.env.NG_APP_Axioms_Domain,
      response_type: process.env.NG_APP_Response_Type,
      redirect_uri: process.env.NG_APP_Redirect_Uri,
      post_logout_uri: process.env.NG_APP_Post_Logout_Uri,
      client_id: process.env.NG_APP_Client_Id,
      scope: process.env.NG_APP_Scope,
      post_login_navigate: "/dashboard",
    });
  }
}
