import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ManageArticlesService} from '../manage-articles.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  article: {};
  params: Params;

  constructor(private route: ActivatedRoute,
              private manageArticlesService: ManageArticlesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => this.params = p);
    if (this.params) {
      this.manageArticlesService.getArticle(this.params.slug).then(data => {
        this.article = data;
      });
    }
  }

  markAsFavorite(slug: string) {
    this.manageArticlesService.markAsFavourite(slug).subscribe(obs => console.log(obs));
  }

}
