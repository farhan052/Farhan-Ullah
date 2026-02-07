// components/Footer.js
import Link from "next/link";
import { data } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href={`${data.github}`}
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </Link>
          <Link
            href={`${data.linkedin}`}
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${data.email}`}
            className="hover:text-blue-400 transition"
          >
            Email
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Designed and Built by {data.name} &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
