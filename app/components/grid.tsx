"use client";

import React, { useEffect } from "react";
import { Post } from "../../types";
import Link from "next/link";

type GridProps = {
  posts: Post[];
};

const Grid = ({ posts }: GridProps) => {
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <section id="grid__container">
      <div className="grid__wrapper row">
        <div className="grid__container--large">
          {posts.map(
            (post, index) =>
              index === 0 && (
                <>
                  <Link href={`/posts/${post.slug}`}>
                    <img
                      src={post.image}
                      className="grid__box--img--large"
                      alt={post.title}
                    />
                    <h4 className="grid__container--large-title">
                      {post.title}
                    </h4>
                    <p className="grid__container--large--description">
                      {post.excerpt}
                    </p>
                  </Link>
                </>
              )
          )}
        </div>
        <div className="grid__container--small">
          {posts.slice(1, 3).map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={post.title}>
              <div
                key={index}
                className={`grid__box ${index === 0 ? "grid__box--top" : ""}`}
              >
                <img
                  src={post.image}
                  className="grid__box--img"
                  alt={post.title}
                />
                <h3 className="grid__box--small-title">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
