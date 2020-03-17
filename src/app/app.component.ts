import { Component } from '@angular/core';
import {ArticleSelectService} from './article-select.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleSelectService]
})
export class AppComponent {
  title = 'RealLifeAngular';
}
