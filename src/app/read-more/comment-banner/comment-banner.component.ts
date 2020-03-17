import {Component, Input, OnInit} from '@angular/core';
import {ManageArticlesService} from '../../manage-articles.service';

@Component({
  selector: 'app-comment-banner',
  templateUrl: './comment-banner.component.html',
  styleUrls: ['./comment-banner.component.css']
})
export class CommentBannerComponent implements OnInit {

  @Input('articleData') articleData;

  constructor(private mangageArticle: ManageArticlesService) {
  }

  ngOnInit() {
  }

  markAsFavorite(slug: string) {
    this.mangageArticle.markAsFavourite(slug).subscribe(obs => console.log(obs));
  }

}
