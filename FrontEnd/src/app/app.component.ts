import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd';
  emails = {};

  constructor(private http: HttpClient) {
    http.get('allEmails').subscribe(data => this.emails = data);
  }
}
