import Head from "next/head";
import { OG_IMAGE_URL } from "../constants/constants";

const Meta = () => {
  return (
    <Head>
      <title>Software Development Blog - Web Development | Louis Young</title>
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="A software development blog by Louis Young." />
      <link rel="canonical" href="https://blog.louisyoung.co.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Louis Young" />
      <meta property="og:title" content="Software Development Blog" />
      <meta property="og:url" content="https://blog.louisyoung.co.uk" />
      <meta property="og:description" content="A software development blog by Louis Young." />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta name="twitter:site" content="@louisryoungg" />
      <meta name="twitter:title" content="Software Development Blog" />
      <meta name="twitter:url" content="https://blog.louisyoung.co.uk" />
      <meta name="twitter:description" content="A software development blog by Louis Young." />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
    </Head>
  );
};

export default Meta;
