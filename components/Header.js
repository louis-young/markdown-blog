import Container from "./Container";
import Logo from "./Logo";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Socials />
        </div>
      </Container>
    </header>
  );
};

export default Header;
