import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Author from "../../components/Author";
import Date from "../../components/Date";
import Progress from "../../components/Progress";
import Container from "../../components/Container";

import markdownToHtml from "../../utilities/markdown";
import truncate from "../../utilities/truncate";
import { getPostBySlug, getAllPosts } from "../../api/api";

import { BLOG_TITLE } from "../../constants/constants";

const Post = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">
        Loading...
      </h1>
    );
  }

  const { title, slug, excerpt, image, author, date, content } = post;

  const truncatedExcerpt = truncate(excerpt);

  return (
    <Layout>
      <Head>
        <title>{`${title} | ${BLOG_TITLE}`}</title>
        <meta name="description" content={truncatedExcerpt} />
        <link rel="canonical" href={`https://blog.louisyoung.co.uk/${slug}`} />

        <meta property="og:site_name" content={BLOG_TITLE} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://blog.louisyoung.co.uk/software-development-articles/${slug}`} />
        <meta property="og:description" content={truncatedExcerpt} />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={`https://blog.louisyoung.co.uk/software-development-articles/${slug}`} />
        <meta name="twitter:description" content={truncatedExcerpt} />
        <meta name="twitter:image" content={image} />
      </Head>

      <Progress />

      <Container>
        <article className="mt-8 mb-24 md:mb-32">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">
            {title}
          </h1>

          <div className="mt-12 mb-12">
            <Author name={author.name} picture={author.picture} link={author.link} />
          </div>

          <img
            src={image}
            alt={`Cover Image for ${title}`}
            className="mb-8 md:mb-16 sm:mx-0 w-full h-full max-h-35 object-cover rounded"
          />

          <div className="max-w-2xl mx-auto mb-6 text-lg">
            <Date dateString={date} />
          </div>

          <Content content={content} />
        </article>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "author", "content", "image", "excerpt"]);

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
