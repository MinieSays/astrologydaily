import { getPostBySlug } from '../../../lib/posts';  // Import the function
import { Post } from '../../../types';  // Import your Post type

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);  // Fetch the post by slug

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}