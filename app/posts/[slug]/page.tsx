import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../../../lib/posts";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section id="post__page">
      <div className="row post__content--wrapper">
        <div className="post__content--cta">
          <span className="post__content--cta-emphasis">
            2025 Year Ahead Report
          </span>{" "}
          - Discover the exciting details of 2025 with a professional 250-page
          professional astrology reading.
        </div>
        <div className="post__image--wrapper">
          <img src={post.image} alt={post.title} className="post__image" />
        </div>

        <div className="post__content--header">
          <h1>{post.title}</h1>
          <p className="post__excerpt">{post.excerpt}</p>
          <div className="post__info">
            <div className="post__tags--container">
              {post.tags && (
                <div className="post__tags">
                  {post.tags.map((tag, index) => (
                    <p key={index} className="tag__item">
                      {tag}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
  
        <article className="post__content">
          <ReactMarkdown className="post__body">{post.content}</ReactMarkdown>
        <div className="sticky-sidebar">
          <div className="ad__container">
            <h3>Advertisement</h3>
            <div className="ad">Your Ad Here</div>
          </div>
        </div>
        </article>
      </div>
    </section>
  );
}
