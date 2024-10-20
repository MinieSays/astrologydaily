import BlogGrid from "./components/blogGrid";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { getAllPosts } from '../lib/posts';  
import { Post } from '../types';  
import Grid from "./components/grid";

export default async function Home() {
  const posts: Post[] = getAllPosts(); 

  return (
    <main>
      <Navbar />
      <Hero />
      <BlogGrid posts={posts} /> 
      <Grid />
    </main>
  );
}