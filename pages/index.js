import Layout from "../components/Layout";
import { getAllPosts } from "../api/api";
import Head from "next/head";
import { CMS_NAME } from "../constants/constants";

import Post from "../components/Post/Post";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>

        {allPosts &&
          allPosts.map((post) => (
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
