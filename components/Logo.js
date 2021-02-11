import Link from "next/link";

import { BLOG_TITLE } from "../constants/constants";

const Logo = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight hover:underline">
      <Link href="/">{BLOG_TITLE}</Link>
    </h2>
  );
};

export default Logo;
