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

  if (router.isFallback) {
    return (
      <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">
        Loading...
      </h1>
    );
  }

  const title = `${post.title} | Louis Young`;

  return (
    <Layout preview={preview}>
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:site_name" content={post.title} />
          <meta property="og:title" content={post.title} />
          <meta property="og:url" content={`https://blog.louisyoung.co.uk/software-development-blog/${post.slug}`} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:image" content={post.ogImage.url} />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:url" content={`https://blog.louisyoung.co.uk/software-development-blog/${post.slug}`} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={post.ogImage.url} />
        </Head>

        <Progress />

        <Header />

        <article className="mb-24 md:mb-32">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">
            {post.title}
          </h1>

          <div className="hidden md:block md:mb-12">
            <Author name={post.author.name} picture={post.author.picture} link={post.author.link} />
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
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "postImage",
    "excerpt",
  ]);

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
