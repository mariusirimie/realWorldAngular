import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  @Output() onTagSelected = new EventEmitter<string>();

  tags: string[] = ['programming', 'javascript', 'angular', 'react', 'mean', 'node', 'rails'];
  selectedTag: string;

  selectTag(tag: string) {
    this.selectedTag = tag;
    this.onTagSelected.emit(this.selectedTag);
  }

}
