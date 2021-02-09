import Container from "./Container";
import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-20">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Socials />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
