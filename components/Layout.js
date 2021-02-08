import Footer from "./Footer";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="container mx-auto px-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
