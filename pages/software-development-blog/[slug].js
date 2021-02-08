import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import { getPostBySlug, getAllPosts } from "../../api/api";
import Head from "next/head";
import markdownToHtml from "../../utilities/markdownToHtml";
import Author from "../../components/Author";
import Date from "../../components/Date";
import Header from "../../components/Header";
import Progress from "../../components/Progress";

const Post = ({ post, preview }) => {
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
          <Progress />
          <Header />
          <article className="mb-24 md:mb-32">
            <Head>
              <title>{post.title} | Louis Young</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">
              {post.title}
            </h1>

            <div className="hidden md:block md:mb-12">
              <Author name={post.author.name} picture={post.author.picture} />
            </div>

            <img
              src={post.postImage}
              alt={`Cover Image for ${post.title}`}
              layout="responsive"
              className="mb-8 md:mb-16 sm:mx-0 w-full h-full max-h-35 object-cover"
            />

            <div className="max-w-2xl mx-auto mb-6 text-lg">
              <Date dateString={post.date} />
            </div>

            <Content content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
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

export const getStaticPaths = async () => {
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

export default Post;
