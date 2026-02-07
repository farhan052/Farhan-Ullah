// app/page.js (UPDATED: Added Experience and Education components)
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience"; // <-- NEW
import Projects from "@/components/Projects";
import Education from "@/components/Education"; // <-- NEW
import Contact from "@/components/Contact";

export default function HomePage() {
  // Use a dark divider (border-gray-700)
  const DarkDivider = () => (
    <hr className="border-gray-700 max-w-7xl mx-auto" />
  );

  return (
    <>
      <Hero />
      {/* <DarkDivider /> */}
      <About />
      {/* <DarkDivider /> */}
      <Experience /> {/* <-- NEW: Section 02 */}
      {/* <DarkDivider /> */}
      <Projects /> {/* Now Section 03 */}
      {/* <DarkDivider /> */}
      <Education /> {/* <-- NEW: Section 04 */}
      {/* <DarkDivider /> */}
      <Contact /> {/* Now Section 05 */}
    </>
  );
}
