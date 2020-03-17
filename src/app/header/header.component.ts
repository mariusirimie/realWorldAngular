import { Component, OnInit } from '@angular/core';
import {ArticleSelectService} from '../article-select.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private articleSelectService: ArticleSelectService) { }

  ngOnInit() {
  }

  createArticles() {
    this.articleSelectService.createArticle().subscribe( (response: any) => {
      console.log(response);
    });
  }

}
