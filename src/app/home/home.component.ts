import {Component, OnInit} from '@angular/core';
import {ArticleModel} from '../article.model';
import {ManageArticlesService} from '../manage-articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: ArticleModel[];
  pages: number;
  currentPage: number;
  tabs: string[] = ['Global Feed'];
  selectedTag: string;

  constructor(private manageArticlesService: ManageArticlesService) {
  }

  ngOnInit() {
    this.currentPage = 1;
    this.selectedTag = this.tabs[0];
    this.manageArticlesService.onFetchPaginatedPosts(1).subscribe((response: ArticleModel[]) => {
      this.articles = response;
    });
  }

  getList(tag: string) {
    if (this.tabs.indexOf(tag) === -1) {
      this.tabs.push(tag);
      this.selectedTag = tag;
      this.manageArticlesService.onFetchFilteredByTagPosts(tag).subscribe((response: ArticleModel[]) => {
        this.articles = response;
      });
    }
  }

  selectTab(tag: string) {
    if (tag === 'Global Feed') {
      this.tabs = ['Global Feed'];
      this.selectedTag = tag;
      this.manageArticlesService.onFetchPaginatedPosts(this.currentPage - 1).subscribe((response: ArticleModel[]) => {
        this.articles = response;
      });
    } else {
      this.selectedTag = tag;
      this.manageArticlesService.onFetchFilteredByTagPosts(tag).subscribe((response: ArticleModel[]) => {
        this.articles = response;
      });
    }
  }

  getPageNumber(pageNumber: number) {
    this.manageArticlesService.onFetchPaginatedPosts(this.currentPage).subscribe((response: ArticleModel[]) => {
      this.articles = response;
    });
    this.currentPage = pageNumber;
  }

}
