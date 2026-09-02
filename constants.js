const experiences = [
  {
    id: 0,
    img: "./assets/company_logo/udan logo.jpg",
    role: "Frontend Intern",
    company: "Udaan Tech Solution",
    date: "December 2025 - February 2026",
    desc: "Developed responsive and reusable UI components for a SaaS-based Consultancy Management System using React.js. Implemented form validation and dynamic UI states for client onboarding and booking workflows.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design", "Form Validation"]
  }
];

const projects = [
  {
    id: 0,
    title: "SneakerZone E-Commerce",
    description: "A full-stack footwear e-commerce application built with React and Java. It includes product search, category and brand browsing, new arrivals and sale sections, user accounts, a shopping cart, order management, and integrated payment options. PostgreSQL is used for data storage, while Postman is used to develop and test the REST APIs.",
    image: "./assets/project_photo/Screenshot 2026-09-01 114601.png",
    tags: ["React", "Java", "Full Stack", "PostgreSQL", "REST API", "Postman", "Payment Integration"],
    github: "https://github.com/Bhawani1200/SneakersZone",
    webapp: ""
  },
  {
    id: 1,
    title: "Real-Time AI Chatbot",
    description: "A React project built as part of a Udemy course, featuring a real-time AI chatbot with API integrations for ChatGPT, Gemini, DeepSeek, Claude, and Grok. Users can interact with multiple AI models through one responsive chat interface.",
    image: "./assets/project_photo/Screenshot 2026-09-01 114952.png",
    tags: ["React", "Real-Time Chat", "ChatGPT API", "Gemini API", "DeepSeek API", "Claude API", "Grok API"],
    github: "https://github.com/Bhawani1200/AI-Chatbot",
    webapp: ""
  },
  {
    id: 2,
    title: "Flappy Bird Game",
    description: "A Java desktop arcade game inspired by Flappy Bird. Built with Swing and AWT, it uses a timer-driven game loop, keyboard input, custom Graphics2D rendering, image assets, object-oriented game components, and collision detection for the bird, pipes, and ground.",
    image: "./assets/project_photo/Screenshot 2026-09-01 224600.png",
    tags: ["Java", "Java Swing", "Java AWT", "OOP", "Collision Detection"],
    github: "https://github.com/Bhawani1200/simple-floppy-bird-game",
    webapp: ""
  },
  {
    id: 3,
    title: "Book Store Management System",
    description: "A full-stack bookstore management application built with ASP.NET Core MVC. It provides CRUD operations for books, genres, authors, and publishers, with Razor-based views, responsive Bootstrap styling, Entity Framework Core persistence, and SQL Server Management Studio (SSMS) for database management.",
    image: "./assets/project_photo/Screenshot 2026-09-01 231501.png",
    tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SSMS", "Bootstrap"],
    github: "https://github.com/Bhawani1200/Book-store",
    webapp: ""
  },
  {
    id: 4,
    title: "Employee Management Application",
    description: "A full-stack employee management application with a React frontend and a Java backend. It provides create, read, update, and delete (CRUD) operations for employee records, uses MySQL Workbench to manage the MySQL database, and uses Postman to test the REST APIs.",
    image: "./assets/project_photo/Screenshot 2026-09-01 232359.png",
    tags: ["React", "Java", "CRUD", "REST API", "MySQL", "MySQL Workbench", "Postman"],
    github: "https://github.com/Bhawani1200/employee-management",
    webapp: ""
  },
  {
    id: 5,
    title: "Employee Records Management",
    description: "An employee and department records management system built with ASP.NET Core MVC 7.0. It supports create, read, update, and delete (CRUD) operations for employee and department records, with Microsoft SQL Server used for data storage and SQL Server Management Studio (SSMS) used for database management.",
    image: "./assets/project_photo/Screenshot 2026-09-02 115425.png",
    tags: ["C#", "ASP.NET Core MVC 7", "CRUD", "SQL Server", "SSMS", "Employee Management"],
    github: "https://github.com/Bhawani1200/employee-management",
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
