import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://conduit.productionready.io/api';
  token: string;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
  }

  onSignUp(data: { username: string, password: string, email: string }) {
    return this.http.post(this.url + '/users', {
      user: {
        username: data.username,
        email: data.email,
        password: data.password
      }
    });
  }

  isAuthenticated() {
    return this.token !== null;
  }

}
