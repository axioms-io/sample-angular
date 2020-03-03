import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private $auth: any;
  public payload;
  public settingsUrl;
  public passwordUrl;
  constructor(private authService: AuthService) {
    this.$auth = this.authService.$auth();
  }

  ngOnInit(): void {
    this.payload =  this.$auth.session.id_payload;
    this.settingsUrl = this.$auth.get_user_settings_url();
    this.passwordUrl = this.$auth.get_user_password_url();

  }

}
