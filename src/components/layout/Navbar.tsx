import classNames from "classnames";
import LinkItem from "../common/LinkItem";
import { FaLock } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav
      className={classNames("flex relative justify-between items-center ml-10")}
    >
      <ul className="flex items-center gap-4">
        <LinkItem
          className="text-xs font-semibold py-4 px-1 flex uppercase hover:text-rose-600"
          menu
          href="/shop"
        >
          Shop
        </LinkItem>
        <LinkItem
          className="text-xs font-semibold py-4 px-1 flex uppercase hover:text-rose-600"
          menu
          href="/blogs"
        >
          Blogs
        </LinkItem>

        <LinkItem
          menu
          href="/login"
          className="flex items-center text-xs font-semibold py-4 px-1 uppercase hover:text-rose-600"
        >
          <FaLock className="mr-2" /> Login
        </LinkItem>
      </ul>
    </nav>
  );
};

export default Navbar;
