export class ArticleModel {
  dataslug: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  };
  favorited: boolean;
  favoritesCount: number;

  constructor(obj: any) {
    this.dataslug = obj.slug;
    this.title = obj.title;
    this.body = obj.body;
    this.createdAt = obj.createdAt;
    this.tagList = obj.tagList;
    this.description = obj.description;
    this.author = obj.author;
  }

}
