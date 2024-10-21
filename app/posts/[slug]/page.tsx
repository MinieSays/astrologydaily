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
      <div className="row">
        <article className="post__content">
          <h1>{post.title}</h1>
          <div className="post__image--wrapper">
            <img src={post.image} alt={post.title} className="post__image" />
          </div>
          <p className="post__excerpt">{post.excerpt}</p>
          <ReactMarkdown className="post__body">{post.content}</ReactMarkdown>
        </article>
      </div>
      <div className="sticky-sidebar">
        <div className="ad__container">
          <h3>Advertisement</h3>
          <div className="ad">Your Ad Here</div>
        </div>
      </div>
    </section>
  );
}
