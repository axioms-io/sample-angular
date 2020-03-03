import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  private $auth: any;

  constructor(private authService: AuthService) {
    this.$auth = this.authService.$auth();
  }

  ngOnInit(): void {
    return this.$auth.logout_with_redirect();
  }

}
