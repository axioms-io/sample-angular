import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private $auth: any;
  public payload;
  public settingsUrl;
  public passwordUrl;
  public isAuthenticated;
  constructor(private authService: AuthService) {
    this.$auth = this.authService.$auth();
  }

  ngOnInit(): void {
    this.payload =  this.$auth.session.id_payload;
    this.settingsUrl = this.$auth.get_user_settings_url();
    this.passwordUrl = this.$auth.get_user_password_url();
    this.isAuthenticated = this.$auth.session.is_authenticated();
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


}
