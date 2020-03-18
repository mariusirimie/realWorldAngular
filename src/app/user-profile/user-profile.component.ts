import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ManageArticlesService} from '../manage-articles.service';

class User {
  profile: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: User;
  params: Params;

  constructor(private route: ActivatedRoute,
              private manageArticlesService: ManageArticlesService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.params = p;
    });
    this.manageArticlesService.getUserProfile(this.params.slug).subscribe(response => {
      this.userProfile = response;
    });
  }

}
