import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

const BlogCard = ({ title, excerpt, image, slug }: BlogCardProps) => {
  // Ensure the slug has hyphens instead of spaces
  const formattedSlug = slug.replace(/\s+/g, "-");

  return (
    <div className="blog__card">
      {/* Link for the image */}
      <Link href={`/posts/${formattedSlug}`}>
        <img src={image} className="post__img" alt={title} />
      </Link>

      <div className="post__content">
        {/* Link for the title */}
        <Link href={`/posts/${formattedSlug}`}>
          <h3 className="post__title">{title}</h3>
        </Link>

        <p className="post__description">{excerpt}</p>

        {/* Link for the "Read More" button */}
        <Link href={`/posts/${formattedSlug}`}>
          <span className="post__button">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
