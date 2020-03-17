import { Component, OnInit } from '@angular/core';
import {ArticleSelectService} from '../../article-select.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  params: Params;

  constructor(private articleInteract: ArticleSelectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.params = p;
    });
  }

  // addComment(comment: string) {
  //   this.articleInteract.updateArticle(comment, this.params.slug).subscribe( res => {
  //     console.log(res);
  //   });
  // }

}
