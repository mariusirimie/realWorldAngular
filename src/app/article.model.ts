export interface ArticleModel {
  slug: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  };
}
