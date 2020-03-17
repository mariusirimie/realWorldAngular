import {Component, OnInit} from '@angular/core';
import {ArticleSelectService} from '../article-select.service';
import {ArticleModel} from '../article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: ArticleModel[];
  currentPage: number;
  tabs: string[] = ['Global Feed'];
  selectedTag: string;

  constructor(private articleSelectService: ArticleSelectService) {
  }

  ngOnInit() {
    this.currentPage = 1;
    this.selectedTag = this.tabs[0];
    this.articleSelectService.getPaginatedArticles(this.currentPage - 1, 1).subscribe((response: any) => {
      this.articles = response.map((item: any) => {
        return new ArticleModel(item);
      });
    });
  }

  getList(tag: string) {
    this.tabs.push(tag);
    this.selectedTag = tag;
    this.articleSelectService.getFilteredArticles(tag).subscribe((response: any) => {
      console.log(response);
      this.articles = [];
      this.articles = response.articles.map((item: any) => {
        return new ArticleModel(item);
      });
    });
  }

  clearTabs() {
    this.tabs = ['Global Feed'];
    this.selectedTag = this.tabs[0];
    this.articleSelectService.getPaginatedArticles(this.currentPage - 1, 1).subscribe((response: any) => {
      this.articles = response.map((item: any) => {
        return new ArticleModel(item);
      });
    });
  }

  getPageNumber(pageNumber: number) {
    this.articleSelectService.getPaginatedArticles(this.currentPage, pageNumber).subscribe((response: any) => {
      this.articles = [];
      this.articles = response.map((item: any) => {
        return new ArticleModel(item);
      });
    });
    this.currentPage = pageNumber;
  }

}
