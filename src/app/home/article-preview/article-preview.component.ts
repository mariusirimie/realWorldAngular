import {Component, Input, OnInit} from '@angular/core';
import {ArticleSelectService} from '../../article-select.service';
import moment from 'moment';
import {ManageArticlesService} from '../../manage-articles.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input('articleData') articleData;
  likes: number;
  date: string;

  constructor(private articleSelectService: ArticleSelectService,
              private manageArticles: ManageArticlesService) {
  }

  ngOnInit() {
    this.likes = Math.floor(Math.random() * 1000);
    this.date = moment().format('MMMM Do YYYY');
  }

  selectArticle() {
    this.articleData = this.articleSelectService.selectArticle(this.articleData);
  }

  favoriteArticle(slug: string) {
    this.manageArticles.markAsFavourite(slug).subscribe(obs => console.log(obs));
  }

}
