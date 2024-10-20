import BlogCard from "../components/ui/blogCard";
import { Post } from "../../types";

type BlogGridProps = {
  posts: Post[];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <section id="blog__gallery">
      <div className="container">
        <div className="blog__row row">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
