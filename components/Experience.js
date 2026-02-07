// components/Experience.js
import { data } from "@/data/portfolioData";

const Experience = () => {
  // This is the dark mode style for an individual job entry
  const JobEntry = ({ job }) => (
    <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400">
          {job.role} at <span className="text-blue-400">{job.company}</span>
        </h3>
        <span className="text-sm font-medium text-gray-400 min-w-max">
          {job.duration}
        </span>
      </div>

      <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
        {job.description.map((point, index) => (
          <li
            key={index}
            className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-400 before:font-bold"
            dangerouslySetInnerHTML={{__html:point}}
          >
         
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    // Note: The Experience section is placed after About (01) and before Projects (02)
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          <span className="text-blue-400"> Work History</span>
        </h2>

        <div className="space-y-10">
          {data.experience.map((job, index) => (
            <JobEntry key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
