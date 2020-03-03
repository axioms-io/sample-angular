import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private $auth: any;
  public isAuthenticated;
  constructor(private authService: AuthService) {
    this.$auth = this.authService.$auth();
  }

  ngOnInit(): void {
    this.isAuthenticated = this.$auth.session.is_authenticated();
  }

}
