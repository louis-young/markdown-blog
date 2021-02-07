import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Content from "../../components/Content";

import Layout from "../../components/Layout";
import { getPostBySlug, getAllPosts } from "../../api/api";
import Head from "next/head";
import { CMS_NAME } from "../../constants/constants";
import markdownToHtml from "../../utilities/markdownToHtml";
import Author from "../../components/Author";
import Date from "../../components/Date";
import Image from "next/image";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>

            <h1>{post.title}</h1>

            <Author name={post.author.name} picture={post.author.picture} />

            <Image
              src={post.postImage}
              alt={`Cover Image for ${post.title}`}
              layout="responsive"
              height={620}
              width={1240}
            />

            <Date dateString={post.date} />

            <Content content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
}

const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "author", "content", "ogImage", "postImage"]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
