import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  LoginWithGmail(email: any) {
    console.log("Hello and Welcome, ", email);
  }

  ngOnInit(): void {
  }

}
