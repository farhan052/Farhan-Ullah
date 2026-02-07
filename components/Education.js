// components/Education.js
import { data } from "@/data/portfolioData";

const Education = () => {
  const DegreeEntry = ({ edu }) => (
    <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
        <span className="text-sm font-medium text-gray-400">
          {edu.duration}
        </span>
      </div>
      <p className="text-lg text-blue-400 mb-2">{edu.institution}</p>
      {edu.gpa !== "N/A" && (
        <p className="text-md text-gray-400">
          GPA: <span className="font-semibold text-gray-300">{edu.gpa}</span>
        </p>
      )}
    </div>
  );

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          <span className="text-blue-400"> Education</span>
        </h2>

        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <DegreeEntry key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
