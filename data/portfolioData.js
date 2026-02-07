// data/portfolioData.js

export const data = {
  name: "Mohd Farhan",
  title: "Software Developer",
  bio: `Passionate full-stack developer with 3+ years of experience building fast, secure, and scalable web applications. I specialize in dynamic, admin-manageable e-commerce platforms, CRMs, and CMS systems, combining modern frontend interfaces (React.js, Next.js, TypeScript, Tailwind CSS) with robust backend APIs (Laravel, MySQL) and cloud deployment (AWS).\n Notable projects:
    Karrozz – dynamic e-commerce with admin dashboard, bulk uploads, SEO-friendly product feeds, and mobile API integration

    True Romance Bridal – admin-managed e-commerce with invoice management and SEO feeds

    Almaas & Blue Angel Jewellers CRMs – jewelry CRMs with role-based user management and printable receipts

    Vehicle Inspection Management CRM – specialized operations management system

    Key strengths: SSR, SEO optimization, API security (JWT), scalable architecture, bulk product management, cloud deployment, and mobile-ready APIs.

    I’m always building solutions that empower businesses, optimize workflows, and enhance user experience, and I’m open to opportunities to create innovative, high-impact products.`,

  email: "mfu7379@gmail.com",
  github: "https://github.com/farhan052",
  linkedin: "https://www.linkedin.com/in/farhan-ullah-836563246/",
  portfolio: "https://mshahzeb.vercel.app/",

  // ABOUT SECTION
  about: {
    headline: "Turning Complex UI Challenges Into Seamless User Experiences.",
    text: "With 2+ years of experience in frontend engineering, I specialize in building scalable React applications, admin dashboards, and complete e-commerce interfaces. I excel in component-driven architecture, clean state management, and delivering performant UIs that simplify workflows. I’m currently seeking opportunities where I can contribute to frontend architecture, collaborate with strong engineering teams, and build high-impact user interfaces.",
    skills: [
      "React.js",
      "Redux Toolkit",
      "React Hook Form",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "Git & GitHub",
      "Postman",
    ],
  },

  // PROJECTS SECTION
  projects: [
    {
      id: 1,
      title: "Leem E-Commerce UI",
      slug: "leem-ecommerce",
      description:
        "Developed responsive PLP/PDP pages and reusable UI components for Leem, a leading GCC fashion e-commerce brand.",
      detailedDescription: [
        "Built a fully responsive product listing and detail interface using React.js with reusable component structures.",
        "Implemented clean UI blocks (banners, cards, categories) optimized for performance across mobile and desktop.",
      ],
      responsibilities: [
        "Developed modular UI components aligned with design system.",
        "Ensured responsive and accessible layouts for all breakpoints.",
        "Collaborated with designers and backend team for accurate data rendering.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Axios"],
      liveUrl: "https://www.leem.com",
      githubUrl: "#",
      imageUrl: "/image/leem.png",
    },

    {
      id: 2,
      title: "Yohesa Admin Panel",
      slug: "yohesa-admin",
      description:
        "A full-featured admin dashboard for managing leads, roles, users, and credit card workflows.",
      detailedDescription: [
        "Yohesa Banking Software is a comprehensive admin platform designed to streamline digital banking operations.",
        " The system enables administrators to manage user roles, employees, teams, and workflows efficiently.",
        " It also supports credit card application processing for multiple banks, insurance management, and other financial service operations.",
        "The platform is built to improve internal banking operations through centralized dashboards, secure role-based access control, and real-time data management.",
      ],
      responsibilities: [
        "Integrated REST APIs across multiple modules (roles, employees, team management, credit card applications, etc.).",

        "Developed reusable and responsive UI components using React.js.",

        "Implemented form handling using React Hook Form and integrated validation logic.",

        "Connected UI with backend services using Axios and managed state efficiently using Redux Toolkit.",

        "Worked on data tables, filters, and dynamic UI updates to improve usability for bank admins.",

        "Performed debugging, testing, and optimization to ensure smooth performance across modules.",
      ],
      technologies: ["MERN", "Redux Toolkit", "Tailwind CSS"],
      liveUrl: "https://yohesa-test-three.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/yohesa.png",
    },

    {
      id: 3,
      title: "AZOWN Property Platform",
      slug: "azown-property",
      description:
        "A multi-category property listing platform with user roles, authentication, and responsive UI.",
      detailedDescription: [
        " Azown is a real estate marketplace where property owners and brokers can list up to seven different types of properties.",
        " The platform enables users to create, manage, and browse property listings, helping buyers or renters find relevant real estate options with ease.",
      ],
      responsibilities: [
        " Developed the user interface using React.js, focusing on a clean, responsive, and user-friendly design.",

        "Created reusable UI components for listing forms, property listings, and property detail views.",

        "Integrated REST APIs to handle property data operations (create, read, update), allowing real-time interaction between frontend and backend.",

        "Worked on data rendering logic and state management to provide a smooth user experience during property search and listings.",
      ],
      technologies: ["MERN", "Context API", "Tailwind CSS"],
      liveUrl: "https://azown.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/azown1.png",
    },

    {
      id: 4,
      title: "Forever Store E-Commerce",
      slug: "forever-store",
      description:
        "A personal MERN e-commerce project featuring product pages, cart system, and admin product management.",
      detailedDescription: [
        "Designed a clean shopping UI with category navigation, product filtering, and cart flow.",
        "Implemented admin panel for product creation, editing, and media uploads.",
      ],
      responsibilities: [
        "Built full frontend pages for user shopping flows.",
        "Integrated admin product CRUD with secure API calls.",
      ],
      technologies: ["MERN", "Tailwind CSS", "Vercel"],
      liveUrl: "https://foreverfrontend-xi.vercel.app/",
      githubUrl: "#",
      imageUrl: "/image/forever.png",
    },
  ],

  // EXPERIENCE SECTION
  experience: [
                {
                  company: "Inovetic Technology",
                  role: " Software Developer",
                  duration: "Jun 2024 - Present",
                  description: [
                    "Software Developer with aprox 3 years of professional experience designing, operating, and optimizing", "<b>MySQL and MariaDB databases</b> for production web and eCommerce systems. Strong expertise in ","<b>SQL query optimization</b>, schema design, indexing, and data integrity.",
                    " Experienced in supporting large-scale transactional systems, diagnosing production database issues, and collaborating with application teams to ensure stable and efficient data operations.",
                  ],
                },
                {
                  company: "Three Six Marketing Pvt. Ltd",
                  role: "Software Developer",
                  duration: "jul 2023 - jun 2024",
                  description: [
                    "Developed responsive interfaces using Material UI, Chakra UI, and Tailwind CSS for multiple client applications.",
                    "Built dynamic form flows and multi-step modules using React Hook Form.",
                    "Assisted with feature development, debugging, and UI enhancement under tight deadlines.",
                  ],
                },
              ],

  // EDUCATION SECTION
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Khwaja Moinuddin Chishti Language University",
      duration: "2019 - 2023",
      gpa: "7.3 / 10",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "S.F.I. College, Kanpur",
      duration: "2016 - 2018",
      gpa: "7.1 / 10",
    },
  ],
};
