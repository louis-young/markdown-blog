import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight hover:underline">
      <Link href="/">Louis Young</Link>
    </h2>
  );
};

export default Logo;
