import React from "react";
import BlogCard from "./ui/blogCard";

const BlogGrid = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row blog__row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
