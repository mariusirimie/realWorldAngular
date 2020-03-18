import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {Params} from '@angular/router';
import {ArticleModel} from './article.model';

export interface ArticleList {
  articles: ArticleModel[];
  articlesCount: number;
}

export interface UserProfile {
  profile: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ManageArticlesService {

  url = 'https://conduit.productionready.io/api';
  selectedArticle: ArticleModel;
  articles: ArticleModel[];
  articlesNumber: number;

  constructor(private http: HttpClient) {
  }

  selectArticle(article: ArticleModel) {
    this.selectedArticle = article;
  }

  markAsFavourite(slug: string) {
    const token = localStorage.getItem('token');
    return this.http
      .post(this.url + '/articles/' + slug + '/favorite', {}, {headers: {Authorization: 'Token ' + token}});
  }

  onFetchPaginatedPosts(page: number) {
    return this.http
      .get<ArticleList>(this.url + '/articles?limit=' + 20 + '&offset=' + page * 19)
      .pipe(map((responseData: ArticleList) => {
        this.articlesNumber = responseData.articlesCount;
        return responseData.articles;
      }));
  }

  onFetchFilteredByTagPosts(filter: string) {
    return this.http
      .get<ArticleList>(this.url + '/articles?tag=' + filter)
      .pipe(map((responseData: ArticleList) => {
        this.articles = responseData.articles;
        return this.articles;
      }));
  }

  onFetchPost(slug: string) {
    return this.http
      .get(this.url + '/articles/' + slug)
      .pipe(map((responseData: any) => {
        return responseData.article ? responseData.article : null;
      }));
  }

  getArticle(slug: string) {
    return new Promise(subs => {
      this.onFetchPost(slug).subscribe((response: any) => {
        subs(response);
      });
    });
  }

  getUserProfile(slug: string) {
    return this.http.get<UserProfile>(this.url + '/profiles/' + slug)
      .pipe(map((response: UserProfile) => {
        return response;
      }));
  }

}
