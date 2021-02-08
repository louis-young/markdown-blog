import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-12 md:mb-20 mt-12">
        <Link href="/">
          <a className="hover:underline">Louis Young</a>
        </Link>
        .
      </h2>
    </header>
  );
};

export default Header;
