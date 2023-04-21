export interface IPost {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export interface IPostData extends IPost {
  content: string;
}
