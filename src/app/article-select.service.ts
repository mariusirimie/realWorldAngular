import {Injectable} from '@angular/core';
import {ServiceInteractService} from './service-interact.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleSelectService {

  selectedArticle: any;

  constructor(private serviceInteractService: ServiceInteractService,
              http: HttpClient) {
  }

  selectArticle(article) {
    console.log(article);
    this.selectedArticle = article;
  }

  createArticle() {
    return this.serviceInteractService.onCreatePost({
      title: 'This is a New Dummy Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      tags: ['programming', 'javascript', 'angular', 'react'],
      comments: ['This is a first comment.', 'This is a second comment']
    });
  }

  updateArticle(data: any, id: string) {
    return this.serviceInteractService.onUpdatePost([id, data]);
  }

  getArticles() {
    return this.serviceInteractService.onFetchPosts();
  }

  getArticle(id: string) {
    return new Promise(subs => {
      this.serviceInteractService.onFetchPosts().subscribe((response: any) => {
        for (const obj of response) {
          if (obj && id && obj.id === id) {
            console.log(response);
            subs(obj);
          }
        }
      });
    });
  }

}
