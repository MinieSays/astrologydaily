import BlogGrid from "./components/blogGrid";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return <main>
    <Navbar />
    <Hero />
    <BlogGrid />
  </main>;
}
