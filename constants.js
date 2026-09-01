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
    tags: ["E-Commerce", "Responsive UI", "Product Search", "Shopping Cart"],
    github: "",
    webapp: ""
  },
  {
    id: 1,
    title: "AI Chatbot",
    description: "A conversational AI chatbot interface that accepts user messages and displays assistant responses in a clean, focused chat experience.",
    image: "./assets/project_photo/Screenshot 2026-09-01 114952.png",
    tags: ["AI", "Chatbot", "JavaScript", "Responsive UI"],
    github: "",
    webapp: ""
  },
  {
    id: 2,
    title: "Flappy Bird Game",
    description: "A Java desktop arcade game inspired by Flappy Bird. Built with Swing and AWT, it uses a timer-driven game loop, keyboard input, custom Graphics2D rendering, image assets, object-oriented game components, and collision detection for the bird, pipes, and ground.",
    image: "./assets/project_photo/Screenshot 2026-09-01 224600.png",
    tags: ["Java", "Java Swing", "Java AWT", "JFrame", "JPanel", "Graphics2D", "ImageIcon", "KeyListener", "Timer", "OOP", "Collision Detection"],
    github: "",
    webapp: ""
  }
];

if (typeof module !== "undefined") {
  module.exports = { experiences, projects };
}
