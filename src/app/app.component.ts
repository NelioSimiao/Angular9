import { AuthSevice } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng4-complete-guide';

  constructor(private authservice: AuthSevice) { }

  ngOnInit() {
    this.authservice.autoLogin();

  }
}
