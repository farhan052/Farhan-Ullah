// components/Contact.js (Updated)
import Button from "./ui/Button";
import { data } from "@/data/portfolioData";
import Link from "next/link";

const Contact = () => {
  return (
    // NEW BG: bg-gray-800
    <section id="contact" className="py-10 bg-gray-800">
      <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-4 text-center">
        {/* NEW TEXT COLOR: text-white, accent blue-400 */}
        <h2 className="text-4xl font-extrabold text-white mb-4">
          <span className="text-blue-400">Get In Touch</span>
        </h2>
        {/* NEW TEXT COLOR: text-gray-300 */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I am currently open to new opportunities! Whether you have a
          challenging project, a job offer, or just want to discuss tech, feel
          free to reach out.
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Buttons styled via Button.js */}
          <Button primary href={`mailto:${data.email}`}>
            Say Hello via Email
          </Button>

          {/* NEW TEXT COLOR: text-gray-400 */}
          <p className="text-gray-400">or find me here:</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
