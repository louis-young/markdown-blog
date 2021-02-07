import Author from "../Author";
import Date from "../Date";
import Link from "next/link";

// import "./Post.scss";

const Post = ({ title, postImage, date, excerpt, author, slug }) => {
  return (
    <article className="post">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="post__image">
          <img src={postImage} alt={`Cover Image for ${title}`} layout="responsive" height={278} width={556} />
        </a>
      </Link>

      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>

      <Date dateString={date} />

      <p>{excerpt}</p>
      <Author name={author.name} picture={author.picture} />
    </article>
  );
};

export default Post;
