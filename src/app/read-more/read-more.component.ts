import {Component, OnInit} from '@angular/core';
import {ArticleSelectService} from '../article-select.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ManageArticlesService} from '../manage-articles.service';
import {isFatalDiagnosticError} from '@angular/compiler-cli/src/ngtsc/diagnostics';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  article: {};
  params: Params;

  constructor(private articleSelectService: ArticleSelectService,
              private route: ActivatedRoute,
              private manageArticlesService: ManageArticlesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => this.params = p);
    if (!(this.articleSelectService.selectedArticle && this.params)) {
      this.articleSelectService.getArticle(this.params.slug).then(data => {
        this.article = data;
        console.log(data);
      });
    }
    this.articleSelectService
      .getArticle(this.articleSelectService.selectedArticle ? this.articleSelectService.selectedArticle.dataslug : null)
      .then(data => {
        this.article = data;
      });
  }

  markAsFavorite(slug: string) {
    this.manageArticlesService.markAsFavourite(slug).subscribe(obs => console.log(obs));
  }

}
