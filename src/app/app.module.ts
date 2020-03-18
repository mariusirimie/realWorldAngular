import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlePreviewComponent } from './home/article-preview/article-preview.component';
import { TagsComponent } from './home/tags/tags.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CommentBannerComponent } from './read-more/comment-banner/comment-banner.component';
import { CommentsComponent } from './read-more/comments/comments.component';
import { AddCommentComponent } from './read-more/add-comment/add-comment.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'article/:slug', component: ReadMoreComponent},
  { path: 'login', component: AuthComponent},
  { path: 'profiles/:slug', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlePreviewComponent,
    TagsComponent,
    ReadMoreComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CommentBannerComponent,
    CommentsComponent,
    AddCommentComponent,
    AuthComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
