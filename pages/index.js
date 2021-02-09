import { getAllPosts } from "../api/api";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/Container";

const Index = ({ posts }) => {
  return (
    <>
      <Layout>
        <section>
          <h1 className="py-20 text-center text-2xl md:text-4xl font-bold tracking-tight leading-normal md:leading-normal">
            Software development blog
            <br />
            by Louis Young
          </h1>
        </section>

        <Container>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mt-6 mb-32">
            {posts.map((post) => (
              <Post
                key={post.slug}
                title={post.title}
                image={post.image}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
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
