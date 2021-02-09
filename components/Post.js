import Author from "./Author";
import Date from "./Date";
import Link from "next/link";

const Post = ({ title, image, excerpt, author, slug }) => {
  return (
    <article>
      <figure className="sm:mx-0 mb-5">
        <Link as={`/software-development-articles/${slug}`} href="/software-development-articles/[slug]">
          <a>
            <img
              src={image}
              className="w-full h-52 object-cover rounded shadow-sm hover:shadow-md hover:opacity-80 transition duration-200"
              alt={`Cover Image for ${title}`}
              loading="lazy"
            />
          </a>
        </Link>
      </figure>

      <h3 className="text-2xl mb- font-bold leading-snug hover:underline">
        <Link as={`/software-development-articles/${slug}`} href="/software-development-articles/[slug]">
          <a>{title}</a>
        </Link>
      </h3>

      <p className="text-lg leading-relaxed mt-4 mb-4">{excerpt}</p>

      <Author name={author.name} picture={author.picture} link={author.link} />
    </article>
  );
};

export default Post;
