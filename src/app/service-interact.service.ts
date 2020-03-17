import {Injectable, OnChanges, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {debug} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ServiceInteractService {

  url = 'https://conduit.productionready.io/api';
  params: Params;
  articlesNumber: number;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      this.params = p;
    });
  }

  onFetchPosts() {
    return this.http
      .get(this.url + '/articles')
      .pipe(map((responseData: any) => {
        this.articlesNumber = responseData.articlesCount;
        const postArray = [];
        for (const article of responseData.articles) {
          postArray.push(article);
        }
        return postArray;
      }));
  }

  onFetchPaginatedPosts(page: number, offset: number) {
    return this.http
      .get(this.url + '/articles?limit=' + page * 20 + '&offset=' + offset * 20)
      .pipe(map((responseData: any) => {
        this.articlesNumber = responseData.articlesCount;
        const postArray = [];
        for (const article of responseData.articles) {
          postArray.push(article);
        }
        return postArray;
      }));
  }

  onFetchFilteredByTagPosts(filter: string) {
    return this.http
      .get(this.url + '/articles?tag=' + filter);
  }

  onFetchPost(slug: string) {
    return this.http
      .get(this.url + '/articles/' + slug)
      .pipe(map((responseData: any) => {
        return responseData.article ? responseData.article : null;
      }));
  }

}
