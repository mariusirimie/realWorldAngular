import {Injectable} from '@angular/core';
import {ServiceInteractService} from './service-interact.service';
import {HttpClient} from '@angular/common/http';
import {ArticleModel} from './article.model';
import {debug} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ArticleSelectService {

  selectedArticle: any;
  articleCount: number;

  constructor(private serviceInteractService: ServiceInteractService) {
  }

  selectArticle(article) {
    this.selectedArticle = article;
  }

  getPaginatedArticles(currentPage: number, nextPage: number) {
    this.articleCount = this.serviceInteractService.articlesNumber;
    return this.serviceInteractService.onFetchPaginatedPosts(nextPage, currentPage);
  }

  getFilteredArticles(filter: string) {
    return this.serviceInteractService.onFetchFilteredByTagPosts(filter);
  }

  getArticle(slug: string) {
    return new Promise(subs => {
      this.serviceInteractService.onFetchPost(slug).subscribe((response: any) => {
        subs(response);
      });
    });
  }

}
