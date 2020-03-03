import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private $auth: any;

  constructor(private authService: AuthService) {
    this.$auth = authService.$auth();
  }

  ngOnInit(): void {
    return this.$auth.login_with_redirect();
  }
}
