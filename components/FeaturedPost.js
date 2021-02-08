import React from "react";
import Link from "next/link";
import Date from "./Date";
import Author from "./Author";

const FeaturedPost = ({ title, postImage, date, excerpt, author, slug }) => {
  return (
    <section>
      <div className="md:mb-12">
        <Link as={`/software-development-blog/${slug}`} href="/software-development-blog/[slug]">
          <a>
            <img
              src={postImage}
              className="w-full h-full max-h-35 mb-5 md:mb-0 object-cover shadow-sm hover:shadow-md hover:opacity-90 transition-shadow duration-200"
              alt={`Cover Image for ${title}`}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-24">
        <div>
          <h3 className="mb-4 text-3xl md:text-4xl lg:text-6xl leading-tight">
            <Link as={`/software-development-blog/${slug}`} href="/software-development-blog/[slug]">
              <a className="hover:underline leading-tight">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Author name={author.name} picture={author.picture} link={author.link} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
