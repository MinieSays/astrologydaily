import React from "react";

const BlogCard = () => {
  return (
    <>
      <div className="blog__card">
        <img src="/taurus.jpg" className="post__img" alt="post__image" />
        <div className="post__content">
          <h3 className="post__title">Blog Post Title</h3>
          <p className="post__description">
            This is a brief excerpt of the blog post to give readers a quick
            overview of the content.
          </p>
          <a href="#" className="post__button">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
