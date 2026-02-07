// components/ui/Button.js (Updated)
import Link from "next/link";

const Button = ({ children, href, primary = false, ...props }) => {
  const baseClasses =
    "px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-[1.03] shadow-lg text-center";

  // NEW STYLES:
  const styleClasses = primary
    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/50" // Blue remains consistent
    : "bg-gray-700 text-white border-2 border-gray-600 hover:bg-gray-600"; // Darker secondary

  return (
    <Link
      href={href || "#"}
      className={`${baseClasses} ${styleClasses} inline-block`}
      target={href && href.startsWith("http") ? "_blank" : "_self"}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
