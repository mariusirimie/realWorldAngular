import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManageArticlesService {

  url = 'https://conduit.productionready.io/api';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  markAsFavourite(slug: string) {
    const token = localStorage.getItem('token');
    return this.http
      .post(this.url + '/articles/' + slug + '/favorite', {}, {headers: {Authorization: 'Token ' + token}});
  }

}
