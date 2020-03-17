import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: string[] = ['programming', 'javascript', 'angular', 'react', 'mean', 'node', 'rails'];
  selectedTag: string;

  constructor() {
  }

  ngOnInit() {
  }

  selectTag(tag: string) {
    this.selectedTag = tag;
    console.log(this.selectedTag);
  }

}
