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

const requestedCertificate = new URLSearchParams(window.location.search).get("cert");
const certificate = certificateData[requestedCertificate] || certificateData.nextjs;
const image = document.getElementById("certificate-image");
const pdf = document.getElementById("certificate-pdf");

document.getElementById("certificate-title").textContent = certificate.title;
document.getElementById("certificate-meta").textContent = certificate.meta;
document.getElementById("certificate-download").href = certificate.file;
const extension = certificate.type === "pdf" ? "pdf" : "jpg";
document.getElementById("certificate-download").download = `${certificate.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-certificate.${extension}`;

if (certificate.type === "pdf") {
  image.hidden = true;
  pdf.src = `${certificate.file}#view=Fit&toolbar=0&navpanes=0`;
} else {
  pdf.hidden = true;
  image.src = certificate.file;
  image.alt = `${certificate.title} certificate awarded to Bhawani Limbu`;
}
document.title = `${certificate.title} Certificate | Bhawani Limbu`;
