import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-banner',
  templateUrl: './comment-banner.component.html',
  styleUrls: ['./comment-banner.component.css']
})
export class CommentBannerComponent implements OnInit {

  @Input('articleData') articleData;

  constructor() {
  }

  ngOnInit() {
  }

}
