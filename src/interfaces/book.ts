export interface Book {
  id: string;
  image: string;
  title: string;
  author: string;
  summary: string;
  contributors: string[];
  liked: boolean;
  createdAt: string;
  updatedAt: string;
}
