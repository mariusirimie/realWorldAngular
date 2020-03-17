import {Injectable, OnChanges, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceInteractService {

  url = 'https://angulartut-d4fc5.firebaseio.com/posts.json';
  params: Params;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      this.params = p;
    });
  }

  onCreatePost(postData: { title: string, content: string, tags: string[], comments?: string[] }) {
    return this.http.post(this.url, postData);
  }

  onFetchPosts() {
    return this.http
      .get(this.url)
      .pipe(map(responseData => {
        const postArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id: key});
          }
        }
        return postArray;
      }));
  }

  onUpdatePost(data: string[]) {
    return this.http
      .patch(this.url.replace('.json', '/') + data[0], JSON.stringify(data[1]),
        {headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})});
  }

}
