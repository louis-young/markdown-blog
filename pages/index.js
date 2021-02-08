import Layout from "../components/Layout";
import { getAllPosts } from "../api/api";
import Head from "next/head";
import Post from "../components/Post";
import FeaturedPost from "../components/FeaturedPost";

const Index = ({ posts }) => {
  const featuredPost = posts[0];

  return (
    <>
      <Layout>
        <Head>
          <title>Software Development Blog - Web Development | Louis Young</title>
        </Head>

        <header className="flex-col md:flex-row flex items-start md:items-center md:justify-between mt-8 mb-16 md:mb-12">
          <h2 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">Louis Young.</h2>
          <h1 className="text-left text-lg mt-5 md:pl-8">
            A software development blog by{" "}
            <a
              href="https://www.louisyoung.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Louis Young
            </a>
            .
          </h1>
        </header>

        <FeaturedPost
          title={featuredPost.title}
          postImage={featuredPost.postImage}
          date={featuredPost.date}
          author={featuredPost.author}
          slug={featuredPost.slug}
          excerpt={featuredPost.excerpt}
        />

        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.slice(1).map((post) => (
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
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "postImage", "excerpt"]);

  return {
    props: { posts },
  };
};

export default Index;
