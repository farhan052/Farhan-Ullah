// components/Header.js (Updated)
import Link from "next/link";
import { data } from "@/data/portfolioData";

const NavItem = ({ href, children }) => (
  // NEW HOVER COLOR: text-blue-400
  <Link
    href={href}
    className="text-gray-300 hover:text-blue-400 transition duration-150 font-medium px-3 py-2"
  >
    {children}
  </Link>
);

const Header = () => {
  return (
    // NEW BG and BORDER: bg-gray-800 and border-gray-700
    <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* NEW TEXT COLOR: text-white */}
        <Link
          href="/#hero"
          className="text-2xl font-extrabold text-white tracking-wider"
        >
          {/* {data.name.toUpperCase()} */}
          M.Shahzeb
        </Link>

        <nav className="hidden md:flex space-x-4">
          <NavItem href="/#about">About</NavItem>
          <NavItem href="/#experience">Experience</NavItem>
          <NavItem href="/#projects">Projects</NavItem>
          <NavItem href="/#education">Education</NavItem>
          <NavItem href="/#contact">Contact</NavItem>
        </nav>

        <div className="md:hidden">
          <Link
            href={`mailto:${data.email}`}
            className="text-sm font-semibold text-blue-400 hover:text-blue-300"
          >
            Email Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
