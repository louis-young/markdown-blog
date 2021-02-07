import Footer from "./Footer";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
