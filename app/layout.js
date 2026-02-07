// app/layout.js (Updated)
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { data } from "@/data/portfolioData";

export function generateMetadata() {
  return {
    title: `${data.name} | ${data.title} Portfolio`,
    description: data.bio,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* NEW: bg-gray-900 sets the primary dark background. 
        text-gray-200 sets the default light text color.
      */}
      <body className="bg-gray-900 text-gray-200 antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
