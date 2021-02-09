import React from "react";
import Layout from "../components/Layout";

const _error = () => {
  return (
    <Layout>
      <section>
        <h1 className="py-20 text-center text-2xl md:text-4xl font-bold tracking-tight leading-normal md:leading-normal">
          Oops, we couldn't find what you
          <br /> were looking for.
        </h1>
      </section>
    </Layout>
  );
};

export default _error;
