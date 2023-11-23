import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

/**
 * Shop layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
