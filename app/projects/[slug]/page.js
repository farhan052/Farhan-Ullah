import Link from "next/link";
import React from "react";
import Button from "../../../components/ui/Button";
import { data } from "../../../data/portfolioData";
import { notFound } from "next/navigation";
import Image from "next/image";

const CaseStudyPage = async ({ params }) => {
  const param = await params;
  const project = data.projects.find((p) => p.slug === param.slug);
  //   console.error("Project not found");

  if (!project) {
    notFound();
    return <div>{param}</div>;
  }

  return (
    // NEW BG: bg-gray-900
    <div className="min-h-screen bg-gray-900">
      {/* NEW HEADER BG & BORDER: bg-gray-800, border-gray-700 */}
      <header className="py-20 bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NEW LINK COLOR: text-blue-400 */}
          <Link
            href="/#projects"
            className="text-blue-400 hover:text-blue-300 font-medium mb-4 block"
          >
            ← Back to Projects
          </Link>
          {/* NEW TEXT COLOR: text-white */}
          <h1 className="text-5xl font-extrabold text-white mb-3">
            {project.title}
          </h1>
          {/* NEW TEXT COLOR: text-gray-300 */}
          <p className="text-xl text-gray-300">{project.description}</p>
          {/* Buttons styled via Button.js */}
          <div className="flex gap-4 mt-6">
            <Button primary href={project.liveUrl}>
              Live Demo
            </Button>
            {/* <Button href={project.githubUrl}>GitHub</Button> */}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 border-2 border-gray-700 rounded-lg overflow-hidden shadow-2xl">
          <div className="relative w-full aspect-video">
            <Image
              src={project.imageUrl}
              alt={`Main image for ${project.title} project`}
              fill // Fills the parent container
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Technologies */}
        <div className="mb-12">
          {/* NEW TEXT COLOR: text-white, border-gray-700 */}
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2 text-md">
            {/* NEW CHIP STYLES */}
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="mb-12">
          {/* NEW TEXT COLOR: text-white, border-gray-700 */}
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            Project Overview
          </h2>
          {project.detailedDescription.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-300 mb-4 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* My Responsibilities */}
        <div className="mb-12">
          {/* NEW TEXT COLOR: text-white, border-gray-700 */}
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            My Role & Responsibilities
          </h2>
          {/* NEW TEXT COLOR: text-gray-300, hover blue-400 */}
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
            {project.responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="hover:text-blue-400 transition duration-200"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage;
