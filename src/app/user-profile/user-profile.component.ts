import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  username: string;
  bio: string;
  image: string;
  following: boolean;

  constructor(username: string, email: string, token: string) {
    this.username = username;
  }

}
