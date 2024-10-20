import BlogGrid from "./components/blogGrid";
import Navbar from "./components/navbar";
import { getAllPosts } from '../lib/posts';  
import { Post } from '../types';  
import Grid from "./components/grid";

export default async function Home() {
  const posts: Post[] = getAllPosts(); 

  return (
    <main>
      <Navbar />
      <Grid posts={posts} />
      <BlogGrid posts={posts} /> 
    </main>
  );
}