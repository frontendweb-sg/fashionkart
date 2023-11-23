import Container from "../common/Container";
import GlobalSearch from "../common/GlobalSearch";
import Logo from "./Logo";
import Navbar from "./Navbar";

/**
 * Header components
 * @returns
 */
const Header = () => {
  return (
    <header className="relative z-20 w-full shadow-sm">
      <Container className="flex items-center justify-between">
        <Logo href="/" className="mr-10" />
        <GlobalSearch />
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
