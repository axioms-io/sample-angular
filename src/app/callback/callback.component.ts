import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  private $auth: any;
  constructor(private authService: AuthService) {
    this.$auth = this.authService.$auth();
  }

  ngOnInit(): void {
    return this.$auth.process_authorize_response();
  }

}
