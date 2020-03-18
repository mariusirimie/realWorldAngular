import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Tags {
  tags: string[];
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Output() onTagSelected = new EventEmitter<string>();
  tags: string[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<Tags>('https://conduit.productionready.io/api/tags')
      .subscribe( response => {
        this.tags = response.tags;
      });
  }

  selectTag(tag: string) {
    this.onTagSelected.emit(tag);
  }

}
