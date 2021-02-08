import Layout from "../components/Layout";
import { getAllPosts } from "../api/api";
import Head from "next/head";
import { BLOG_NAME } from "../constants/constants";

import Post from "../components/Post";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";

export default function Index({ allPosts }) {
  const featuredPost = allPosts[0];

  const remainingPosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>

        <section className="flex-col md:flex-row flex items-start md:items-center md:justify-between mt-8 mb-16 md:mb-12">
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">Louis Young.</h1>
          <h4 className="text-left text-lg mt-5 md:pl-8">
            A software development blog by{" "}
            <a
              href="https://www.louisyoung.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary duration-200 transition-colors"
            >
              Louis Young
            </a>
            .
          </h4>
        </section>

        {featuredPost && (
          <FeaturedPost
            title={featuredPost.title}
            postImage={featuredPost.postImage}
            date={featuredPost.date}
            author={featuredPost.author}
            slug={featuredPost.slug}
            excerpt={featuredPost.excerpt}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {remainingPosts &&
            remainingPosts.map((post) => (
              <Post
                key={post.slug}
                title={post.title}
                postImage={post.postImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "postImage", "excerpt"]);

  return {
    props: { allPosts },
  };
}
