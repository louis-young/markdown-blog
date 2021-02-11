import Head from "next/head";
import Layout from "../components/Layout";

import { BLOG_TITLE, OG_IMAGE_URL } from "../constants/constants";

const _error = () => {
  return (
    <>
      <Head>
        <title>Error | {BLOG_TITLE}</title>
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
            Oops, something went wrong.
            <br />
            Please try again shortly.
          </h1>
        </section>
      </Layout>
    </>
  );
};

export default _error;
