import {Component, OnInit} from '@angular/core';
import {ServiceInteractService} from '../service-interact.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  signUp(username, email, password) {
    this.authService.onSignUp({username, password, email})
      .subscribe((obs: any) => {
        localStorage.setItem('token', obs.user.token);
        console.log(obs);
      });
  }



}
