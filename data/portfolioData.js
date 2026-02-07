// data/portfolioData.js

export const data = {
  name: "Mohd Farhanullah",
  title: "Backend & Full Stack Developer (Next.js, MySQL)",
  bio: `Software Developer with 3+ years of experience building production-grade, database-driven web applications. I specialize in developing scalable admin panels, eCommerce platforms, and CRM systems using Next.js, React.js, Laravel, and MySQL/MariaDB.

My work focuses on server-side rendering (SSR), SEO optimization, secure API design, and high-performance SQL query optimization. I have hands-on experience supporting large-scale transactional systems, optimizing database schemas, and resolving live production issues.

I enjoy building reliable systems that simplify business operations, improve performance, and scale efficiently.`,

  email: "mfu7379@gmail.com",
  github: "https://github.com/farhan052",
  linkedin: "https://www.linkedin.com/in/farhan-ullah-836563246/",
  portfolio: "https://farhan-ullah.vercel.app/",

  // ABOUT SECTION
  about: {
    headline: "Building Scalable Web Applications with Strong Backend Foundations",
    text: `I build modern web applications that combine clean user interfaces with robust backend systems. 
I have strong experience working with databases, APIs, and admin-driven platforms where performance, data integrity, and scalability matter.`,
    skills: [
      "Next.js",
      "React.js",
      "Server-Side Rendering (SSR)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL / MariaDB",
      "REST APIs",
      "JWT Authentication",
      "Git & GitHub",
      "Postman",
      "Linux Systems",
    ],
  },

  // PROJECTS SECTION
  projects: [
    {
      id: 1,
      title: "Jewellery CRM & Admin Platform",
      slug: "jewellery-crm",
      description:
        "A full-featured CRM and admin system for jewelry businesses with role-based access and transaction management.",
      detailedDescription: [
        "Built a scalable admin panel for managing customers, invoices, products, and orders.",
        "Implemented server-side rendered pages for faster load times and SEO-friendly admin views.",
      ],
      responsibilities: [
        "Designed MySQL schemas for customers, invoices, products, and transactions.",
        "Optimized SQL queries for reporting, filtering, and large datasets.",
        "Implemented role-based authentication using JWT.",
      ],
      technologies: ["Next.js", "React.js", "Laravel", "MySQL", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "#",
      imageUrl: "",
    },

    {
      id: 2,
      title: "Vehicle Rental & Booking Management System",
      slug: "vehicle-rental-system",
      description:
        "A booking and rental management platform with admin controls and transactional workflows.",
      detailedDescription: [
        "Developed server-side rendered booking pages using Next.js.",
        "Implemented availability checks, billing logic, and admin reporting.",
      ],
      responsibilities: [
        "Designed relational database schemas for rentals, bookings, and billing.",
        "Built REST APIs backed by MySQL for booking workflows.",
        "Optimized JOIN-based queries for availability and reporting.",
      ],
      technologies: ["Next.js", "MySQL", "Laravel", "REST APIs"],
      liveUrl: "",
      githubUrl: "#",
      imageUrl: "",
    },

    {
      id: 3,
      title: "SEO-Optimized eCommerce Platform",
      slug: "nextjs-ecommerce",
      description:
        "An SEO-friendly eCommerce storefront with admin-managed products and inventory.",
      detailedDescription: [
        "Built product listing and detail pages using Next.js SSR and ISR.",
        "Integrated backend APIs for inventory, orders, and pricing.",
      ],
      responsibilities: [
        "Optimized SQL queries for high-frequency read operations.",
        "Implemented pagination, filtering, and search functionality.",
        "Ensured data consistency across orders and inventory.",
      ],
      technologies: ["Next.js", "React.js", "MySQL", "REST APIs"],
      liveUrl: "",
      githubUrl: "#",
      imageUrl: "",
    },
  ],

  // EXPERIENCE SECTION
  experience: [
    {
      company: "Inovetic Technologies",
      role: "Software Developer",
      duration: "Jun 2024 - Present",
      description: [
        "Designed, maintained, and optimized production-grade MySQL and MariaDB databases for web and eCommerce systems.",
        "Worked extensively on SQL query optimization, indexing strategies, and schema design.",
        "Diagnosed and resolved live production database and backend issues.",
        "Collaborated with frontend and backend teams to ensure data integrity and system stability.",
      ],
    },
    {
      company: "Three Six Marketing Pvt. Ltd.",
      role: "Software Developer",
      duration: "Jul 2023 - Jun 2024",
      description: [
        "Developed responsive frontend interfaces using React.js, Material UI, Chakra UI, and Tailwind CSS.",
        "Built dynamic forms and multi-step workflows for admin-driven applications.",
        "Worked closely with backend teams to integrate APIs and improve application performance.",
      ],
    },
  ],

  // EDUCATION SECTION
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
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
