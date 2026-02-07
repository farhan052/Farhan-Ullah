// components/About.js (Updated)
import { data } from "@/data/portfolioData";

const About = () => {
  return (
    // NEW BG: bg-gray-800
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEW TEXT COLOR: text-white, accent blue-400 */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          <span className="text-blue-400">About Me</span>
        </h2>

        <div className="lg:flex lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* NEW TEXT COLOR: text-white */}
            <h3 className="text-3xl font-semibold text-white mb-4">
              {data.about.headline}
            </h3>
            {/* NEW TEXT COLOR: text-gray-300 */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {data.about.text}
            </p>
            {/* NEW BORDER & TEXT: border-blue-400, text-gray-400 */}
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-400">
              The best code is not just functional, but also maintainable and a
              joy to read.
            </blockquote>
          </div>

          <div className="lg:w-1/2">
            {/* NEW TEXT COLOR: text-white */}
            <h3 className="text-2xl font-semibold text-white mb-4">
              My Core Technologies
            </h3>
            {/* NEW TEXT COLOR: text-gray-300, accent blue-400 */}
            <ul className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              {data.about.skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
