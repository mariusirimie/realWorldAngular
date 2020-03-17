import {Component, OnInit} from '@angular/core';
import {ArticleSelectService} from '../article-select.service';
import {ArticleModel} from '../article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: ArticleModel[] = [];

  constructor(private articleSelectService: ArticleSelectService) {
  }

  ngOnInit() {
    this.articleSelectService.getArticles().subscribe((response: any) => {
      for (const obj of response) {
        this.articles.push({...obj, id: obj.id});
      }
    });
  }


}
