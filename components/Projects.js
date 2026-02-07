// components/Projects.js (Updated)
import ProjectCard from "./ui/ProjectCard";
import { data } from "@/data/portfolioData";
import Link from "next/link";

const Projects = () => {
  return (
    // NEW BG: bg-gray-900
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEW TEXT COLOR: text-white, accent blue-400 */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">
          <span className="text-blue-400">Selected Projects</span>
        </h2>
        {/* NEW TEXT COLOR: text-gray-300 */}
        <p className="text-xl text-gray-300 text-center mb-12">
          Showcasing my best work and technical diversity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* ProjectCard handles its own dark styling */}
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
