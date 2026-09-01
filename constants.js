const experiences = [
  {
    id: 0,
    img: "./assets/company_logo/webverse_logo.png",
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive user interfaces, implement RESTful APIs, and improve application performance in an agile environment.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript", "Tailwind CSS", "Redux", "Next.js"]
  },
  {
    id: 1,
    img: "./assets/company_logo/agc_logo.png",
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to full-stack projects using HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and React. Worked with the team to deliver responsive, high-performance applications and seamless user experiences.",
    skills: ["React JS", "Redux", "JavaScript", "Tailwind CSS", "HTML", "CSS", "SQL"]
  },
  {
    id: 2,
    img: "./assets/company_logo/newtonschool_logo.png",
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Designed and implemented reusable UI components and responsive websites. Translated Figma wireframes and prototypes into interactive web pages using HTML, CSS, JavaScript, Bootstrap, and Material UI.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "Material UI"]
  }
];

const projects = [
  {
    id: 0,
    title: "SneakerZone E-Commerce",
    description: "A modern footwear e-commerce storefront with product search, category navigation, new arrivals, sale and brand sections, account access, a shopping cart, dark mode, and customer contact options.",
    image: "./assets/project_photo/Screenshot 2026-09-01 114601.png",
    tags: ["E-Commerce", "Responsive UI", "Shopping Cart"],
    github: "",
    webapp: ""
  },
  {
    id: 1,
    title: "AI Chatbot",
    description: "A conversational AI chatbot interface that accepts user messages and displays assistant responses in a clean, focused chat experience.",
    image: "./assets/project_photo/Screenshot 2026-09-01 114952.png",
    tags: ["AI", "Chatbot", "JavaScript"],
    github: "",
    webapp: ""
  },
  {
    id: 2,
    title: "Flappy Bird Game",
    description: "A Java desktop arcade game inspired by Flappy Bird. Built with Swing and AWT, it uses a timer-driven game loop, keyboard input, custom Graphics2D rendering, image assets, object-oriented game components, and collision detection for the bird, pipes, and ground.",
    image: "./assets/project_photo/Screenshot 2026-09-01 224600.png",
    tags: ["Java", "Java Swing", "Java AWT", "OOP", "Collision Detection"],
    github: "",
    webapp: ""
  },
  {
    id: 3,
    title: "Book Store Management System",
    description: "A full-stack bookstore management application built with ASP.NET Core MVC. It provides CRUD operations for books, genres, authors, and publishers, with Razor-based views, responsive Bootstrap styling, Entity Framework Core persistence, and SQL Server integration.",
    image: "./assets/project_photo/Screenshot 2026-09-01 231501.png",
    tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Bootstrap"],
    github: "",
    webapp: ""
  },
  {
    id: 4,
    title: "Employee Management Application",
    description: "An ASP.NET Core MVC employee management system with create, read, update, and delete operations. It uses Razor for server-rendered views, Entity Framework Core and LINQ for data access, SQL Server for persistence, Bootstrap for responsive styling, JavaScript for client-side behavior, and dependency injection for service management.",
    image: "./assets/project_photo/Screenshot 2026-09-01 232359.png",
    tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Bootstrap"],
    github: "",
    webapp: ""
  }
];

const certificateData = {
  nextjs: {
    title: "Next.js",
    meta: "CODE IT · 16 July 2024",
    file: "./assets/certificates/Nextjs.jpg"
  },
  nodejs: {
    title: "Node.js",
    meta: "CODE IT · 3 June 2024",
    file: "./assets/certificates/Nodejs.jpg"
  },
  reactjs: {
    title: "React.js",
    meta: "CODE IT · 24 June 2024",
    file: "./assets/certificates/Reactjs.jpg"
  },
  fullstack: {
    title: "Spring Boot + React Full-Stack",
    meta: "Udemy · 9 June 2025 · 20 hours",
    file: "./assets/certificates/UC-80f4726e-a5c8-4e94-bfbb-1e618c2dea64_page-0001.jpg"
  },
  "ecommerce-masterclass": {
    title: "Java Spring Boot Full Stack: eCommerce Project Masterclass",
    meta: "Udemy · 1 September 2026 · 93 total hours",
    file: "./assets/certificates/UC-78191506-6e17-4403-bef3-d9bf4ff4cce9.pdf",
    type: "pdf"
  },
  "udaan-internship": {
    title: "Internship Certificate of Appreciation",
    meta: "Udaan Tech Solution · 6 February 2026",
    file: "./assets/certificates/WhatsApp Image 2026-09-01 at 10.34.40 PM.jpeg"
  }
};

if (typeof module !== "undefined") {
  module.exports = { experiences, projects, certificateData };
}
