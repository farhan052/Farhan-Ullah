// components/ui/ProjectCard.js (Updated)
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const caseStudyLink = `/projects/${project.slug}`;

  return (
    // NEW BG: bg-gray-800, NEW SHADOW: shadow-xl and hover shadow adjustment
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-400/30 transition-shadow duration-500 group">
      <div className="h-48 bg-gray-700 flex items-center justify-center">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>

      <div className="p-6">
        <Link href={caseStudyLink}>
          {/* NEW TEXT COLOR: text-white */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>

        {/* NEW TEXT COLOR: text-gray-400 */}
        <p className="text-gray-400 mb-4 h-16">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-sm mb-6">
          {/* NEW TECH CHIP: bg-indigo-900/50 and text-indigo-300 */}
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={caseStudyLink}
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            Read Case Study →
          </Link>
          {/* NEW LINK COLOR: text-gray-400 */}
          {/* <Link
            href={project.githubUrl}
            target="_blank"
            className="text-gray-400 font-semibold hover:text-gray-300 transition-colors"
          >
            GitHub
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
