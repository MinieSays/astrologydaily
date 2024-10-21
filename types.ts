export interface Post {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  content: string;
  tags?: string[];
  date?: string;  
}