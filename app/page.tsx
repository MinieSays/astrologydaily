import BlogGrid from "./components/blogGrid";
import { getAllPosts } from '../lib/posts';  
import { Post } from '../types';  
import Grid from "./components/grid";

export default async function Home() {
  const posts: Post[] = getAllPosts(); 

  return (
    <main>
      <Grid posts={posts} />
      <BlogGrid posts={posts} /> 
    </main>
  );
}