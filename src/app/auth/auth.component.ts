import {Component} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) {
  }

  signUp(username, email, password) {
    this.authService.onSignUp({username, password, email})
      .subscribe((obs: any) => {
        console.log(obs);
        localStorage.setItem('token', obs.user.token);
      });
  }

}
