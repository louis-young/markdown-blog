import Author from "./Author";
import Date from "./Date";
import Link from "next/link";

const Post = ({ title, postImage, date, excerpt, author, slug }) => {
  return (
    <article>
      <figure className="sm:mx-0 mb-5">
        <Link as={`/software-development-blog/${slug}`} href="/software-development-blog/[slug]">
          <a>
            <img
              src={postImage}
              className="shadow-sm hover:shadow-md hover:opacity-90 transition-shadow duration-200"
              alt={`Cover Image for ${title}`}
              layout="responsive"
            />
          </a>
        </Link>
      </figure>

      <h3 className="text-3xl mb-3 leading-snug hover:underline">
        <Link as={`/software-development-blog/${slug}`} href="/software-development-blog/[slug]">
          <a>{title}</a>
        </Link>
      </h3>

      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

      <Author name={author.name} picture={author.picture} link={author.link} />
    </article>
  );
};

export default Post;
