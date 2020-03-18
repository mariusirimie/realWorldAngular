import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://conduit.productionready.io/api';
  token: string;

  constructor(private http: HttpClient) {
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
    this.token = localStorage.getItem('token');
    return this.token !== null;
  }

}
