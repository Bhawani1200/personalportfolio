// script.js - Portfolio Interactive Logic

// Embedded Data (projects, experiences) is loaded from constants.js

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initTypewriter();
  initTiltEffect();
  initScrollReveal();
  initProjects();
  initModal();
  initContactForm();
  initExperiences();
  initCertificateCarousel();
});

function initCertificateCarousel() {
  const track = document.getElementById("certificates-track");
  const nextButton = document.getElementById("certificates-next");
  if (!track || !nextButton) return;

  nextButton.addEventListener("click", () => {
    const firstCard = track.querySelector(".certificate-item");
    if (!firstCard) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;

    track.scrollTo({
      left: atEnd ? 0 : track.scrollLeft + step,
      behavior: "smooth"
    });
  });
}

/* 1. Navbar Scroll Effect & Smooth Navigation */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Navbar scroll background toggle
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    const icon = mobileMenuBtn.querySelector("i");
    mobileMenu.classList.toggle("open");

    if (mobileMenu.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Smooth scroll helper
  const navigateToSection = (sectionId) => {
    mobileMenu.classList.remove("open");
    const icon = mobileMenuBtn.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = section.getBoundingClientRect().top + window.scrollY - navHeight + 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  // Bind clicks
  document.querySelectorAll("[data-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const sectionId = btn.getAttribute("data-target");
      navigateToSection(sectionId);
    });
  });

  // Scroll active section highlighter
  const sections = document.querySelectorAll("section");
  const navButtons = document.querySelectorAll(".nav-links li button");
  const mobileButtons = document.querySelectorAll(".mobile-menu button");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120; // offset for nav

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    const updateActiveButton = (buttonsList) => {
      buttonsList.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-target") === current) {
          btn.classList.add("active");
        }
      });
    };

    updateActiveButton(navButtons);
    updateActiveButton(mobileButtons);
  });
}

/* 2. Typewriter Effect */
function initTypewriter() {
  const typingElement = document.querySelector(".about-typing");
  if (!typingElement) return;

  const words = ["Fullstack Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = 100;
    if (isDeleting) {
      speed = 50;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at the end
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500;
    }

    setTimeout(type, speed);
  };

  // Start the typewriter loop
  setTimeout(type, 500);
}

/* 3. Parallax Card Tilt Effect */
function initTiltEffect() {
  const tiltElements = document.querySelectorAll(".tilt-effect");

  tiltElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xc = rect.width / 2;
      const yc = rect.height / 2;

      // Calculate rotation angles (max 20 degrees)
      const maxTilt = 20;
      const angleX = -((y - yc) / yc) * maxTilt;
      const angleY = ((x - xc) / xc) * maxTilt;

      el.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      el.style.transition = "transform 1s ease";
    });

    el.addEventListener("mouseenter", () => {
      el.style.transition = "transform 0.1s ease-out";
    });
  });
}

/* 4. Scroll Reveal (Intersection Observer) */
function initScrollReveal() {
  const elements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

/* 5. Projects Modal Popup */
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".modal-close-btn");
  const projectCards = document.querySelectorAll(".project-card");

  const openModal = (projectId) => {
    const project = projects.find(p => p.id === parseInt(projectId));
    if (!project) return;

    modal.querySelector(".modal-img").src = project.image;
    modal.querySelector(".modal-img").alt = project.title;
    modal.querySelector(".modal-title").textContent = project.title;
    modal.querySelector(".modal-desc").textContent = project.description;

    const tagsContainer = modal.querySelector(".modal-tags");
    tagsContainer.innerHTML = "";
    project.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "modal-tag";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    modal.querySelector(".modal-btn-code").href = project.github;
    modal.querySelector(".modal-btn-live").href = project.webapp;

    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Disable scroll
  };

  const closeModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = ""; // Restore scroll
  };

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openModal(id);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
}

/* 6. EmailJS Form Handling & Toast Messages */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector(".btn-submit");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Send Form via EmailJS
    emailjs.sendForm(
      "service_axbtt7a",  // Service ID
      "template_1ziboq3", // Template ID
      form
    )
      .then(() => {
        showToast("Message sent successfully! ✅", "success");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showToast("Failed to send message. Please try again.", "error");
      })
      .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
  });
}

/* Toast Message Helper */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  // Trigger browser paint to allow smooth animation
  setTimeout(() => toast.classList.add("show"), 10);

  const removeToast = () => {
    toast.classList.remove("show");
    // Remove from DOM after transition finishes
    setTimeout(() => toast.remove(), 300);
  };

  toast.querySelector(".toast-close").addEventListener("click", removeToast);

  // Auto-remove after 4 seconds
  setTimeout(removeToast, 4000);
}

/* 7. Dynamic Experience Rendering */
function initExperiences() {
  const timelineContainer = document.getElementById("experience-timeline");
  if (!timelineContainer || typeof experiences === "undefined") return;
  
  let html = `<div class="timeline-line"></div>`;
  
  experiences.forEach((exp, index) => {
    const alignment = index % 2 === 0 ? "align-right" : "align-left";
    const skillsHtml = exp.skills.map(skill => `<li class="timeline-skill-badge">${skill}</li>`).join("");
    
    html += `
        <div class="timeline-entry ${alignment}">
          <div class="timeline-circle">
            <img src="${exp.img}" alt="${exp.company}">
          </div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-logo">
                <img src="${exp.img}" alt="${exp.company}">
              </div>
              <div class="timeline-meta">
                <h3 class="timeline-role">${exp.role}</h3>
                <h4 class="timeline-company">${exp.company}</h4>
                <span class="timeline-date">${exp.date}</span>
              </div>
            </div>
            <p class="timeline-desc">${exp.desc}</p>
            <h5 class="timeline-skills-title">Skills:</h5>
            <ul class="timeline-skills-list">
              ${skillsHtml}
            </ul>
          </div>
        </div>
    `;
  });
  
  timelineContainer.innerHTML = html;
}

/* 8. Dynamic Projects Rendering */
function initProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid || typeof projects === "undefined") return;
  
  let html = "";
  projects.forEach((project) => {
    const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
    
    html += `
        <div class="project-card" data-id="${project.id}">
          <div class="project-img-container">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
              ${tagsHtml}
            </div>
          </div>
        </div>
    `;
  });
  
  projectsGrid.innerHTML = html;
}
