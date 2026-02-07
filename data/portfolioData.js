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
  title: "Jewellery CRM SuperAdmin (Multi-Domain, Store & Vendor Management)",
  slug: "jewellery-crm-superadmin",
  description:
    "Enterprise-grade Jewellery CRM SuperAdmin system supporting multi-domain operations, store-wise invoicing, purchase orders, and vendor order management.",
  detailedDescription: [
    "Developed a multi-tenant Jewellery CRM platform enabling multiple domains and stores to operate independently within a single system.",
    "Implemented store-wise invoice generation, purchase order workflows, and vendor order management.",
    "Built role-based access control for SuperAdmin, Admin, Store Manager, Vendor, and Staff users.",
    "Designed responsive and scalable admin interfaces using Bootstrap.",
  ],
  responsibilities: [
    "Designed scalable MySQL/MariaDB schemas supporting multi-domain, multi-store, and vendor-level data isolation.",
    "Implemented vendor order management workflows including order creation, status tracking, and fulfillment.",
    "Developed store-wise invoice and purchase order generation with transactional consistency.",
    "Implemented product-wise barcode generation for inventory tracking and billing.",
    "Optimized complex SQL queries for reporting, filtering, and large transactional datasets.",
    "Ensured secure authentication and authorization across domains, stores, and vendor roles.",
  ],
  technologies: [
    "Laravel",
    "MySQL / MariaDB",
    "Bootstrap",
    "REST APIs",
    "Role-Based Access Control (RBAC)",
    "Multi-Domain (Multi-Tenant) Architecture",
    "Store-Wise Invoice Management",
    "Purchase Order Management",
    "Vendor Order Management",
    "Barcode Generation",
  ],
  liveUrl: "https://jewellerycrm-superadmin.astraldigitech.com/login",
  githubUrl: "",
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
      technologies: [ "MySQL", "Laravel", "REST APIs","WinSCP","Filzilla", 'AWS EC2'],
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
