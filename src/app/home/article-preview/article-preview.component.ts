import {Component, Input, OnInit} from '@angular/core';
import moment from 'moment';
import {ManageArticlesService} from '../../manage-articles.service';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input('articleData') articleData;
  likes: number;
  date: string;

  constructor(private manageArticles: ManageArticlesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.likes = Math.floor(Math.random() * 1000);
    this.date = moment().format('MMMM Do YYYY');
  }

  selectArticle() {
    this.manageArticles.selectArticle(this.articleData);
  }

  favoriteArticle(slug: string) {
    if ( this.authService.isAuthenticated() ) {
      this.manageArticles.markAsFavourite(slug).subscribe(obs => console.log(obs));
    } else {
      this.router.navigate(['/login']);
    }
  }

}
