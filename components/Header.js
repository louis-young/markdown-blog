import Link from "next/link";
import Container from "./Container";

const Header = () => {
  return (
    <header className="py-4">
      <Container>
        <div className=" flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <Link href="/">Louis Young</Link>
          </h2>
          <nav>
            <ul className="grid grid-cols-4 gap-4 items-center">
              <li>
                <a href="https://www.louisyoung.co.uk" target="_blank" rel="noopnener noreferrer">
                  <img className="w-5 hover:opacity-80" src="/icons/website.svg" alt="Website" />
                </a>
              </li>
              <li>
                <a href="https://github.com/louis-youn" target="_blank" rel="noopnener noreferrer">
                  <img className="w-5 hover:opacity-80" src="/icons/github.svg" alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/louisryoungg" target="_blank" rel="noopnener noreferrer">
                  <img className="w-5 hover:opacity-80" src="/icons/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/louis-r-young" target="_blank" rel="noopnener noreferrer">
                  <img className="w-5 hover:opacity-80" src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
