import Head from "next/head";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/Container";

import { getAllPosts } from "../api/api";

import { BLOG_TITLE, OG_IMAGE_URL } from "../constants/constants";

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Software Development Blog - Web Development | {BLOG_TITLE}</title>
        <meta
          name="description"
          content={`A software development blog by ${BLOG_TITLE} where I write about JavaScript, React, and general software/web development.`}
        />
        <link rel="canonical" href="https://blog.louisyoung.co.uk" />

        <meta property="og:site_name" content={BLOG_TITLE} />
        <meta property="og:title" content="Software Development Blog" />
        <meta property="og:url" content="https://blog.louisyoung.co.uk" />
        <meta
          property="og:description"
          content={`A software development blog by ${BLOG_TITLE} where I write about JavaScript, React, and general software/web development.`}
        />
        <meta property="og:image" content={OG_IMAGE_URL} />

        <meta name="twitter:title" content="Software Development Blog" />
        <meta name="twitter:url" content="https://blog.louisyoung.co.uk" />
        <meta
          name="twitter:description"
          content={`A software development blog by ${BLOG_TITLE} where I write about JavaScript, React, and general software/web development.`}
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Head>
      <Layout>
        <section>
          <h1 className="py-20 text-center text-2xl md:text-4xl font-bold tracking-tight leading-normal md:leading-normal">
            Software development blog
            <br />
            by {BLOG_TITLE}
          </h1>
        </section>

        <Container>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mt-6 mb-32">
            {posts.map(({ slug, title, image, author, excerpt }) => (
              <Post key={slug} title={title} image={image} author={author} slug={slug} excerpt={excerpt} />
            ))}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "image", "excerpt"]);

  return {
    props: { posts },
  };
};

export default Index;
