// components/Hero.js (Left-Aligned, Attractive Dark Mode)
import Button from "./ui/Button";
import { data } from "@/data/portfolioData";

const Hero = () => {
  return (
    // CHANGES: Removed items-center, text-center. Added flex, justify-start for alignment.
    <section
      id="hero"
      className="flex justify-start min-h-[90vh] px-4 py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto flex items-center w-full">
        {/* Decorative Element - A subtle vertical line */}
        <div className="hidden md:block h-72 w-1 bg-blue-500/50 mr-12 rounded-full shadow-lg shadow-blue-500/20"></div>

        {/* Content Container - Set to max-w-4xl for comfortable left alignment */}
        <div className="max-w-4xl text-left">
          {/* NEW COLOR: text-blue-400 */}
          <p className="text-xl font-medium text-white-400 mb-4 tracking-widest uppercase animate-fadeInUp">
            Hi, my name is
          </p>

          {/* Primary Headline */}
          {/* Text is now left-aligned implicitly by the parent div */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fadeInUp delay-200">
            {/* NEW GRADIENT: from-blue-400 to-indigo-500 */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              {data.name}
            </span>
          </h1>

          {/* Secondary Headline / Title */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-8 animate-fadeInUp delay-400">
            {data.title}
          </h2>

          {/* Short Bio */}
          <p className="max-w-2xl text-xl text-gray-400 mb-10 animate-fadeInUp delay-600">
            {data.bio}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-800">
            <Button primary href="/#projects">
              View My Work
            </Button>
            <Button href="/#contact">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
