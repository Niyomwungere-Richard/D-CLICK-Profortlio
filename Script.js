// Menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fermer le menu au clic sur un lien
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animation des barres de compétences au scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress");
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, observerOptions);

observer.observe(document.querySelector(".competences"));

// --- EmailJS pour le formulaire de contact ---
// 1. Inclure le script EmailJS dans votre HTML :
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// 2. Remplacer les valeurs ci-dessous par vos identifiants EmailJS
document.addEventListener("DOMContentLoaded", function () {
  if (window.emailjs) {
    emailjs.init("LDa2knYWF_1uUidNT"); // Remplacez par votre User ID EmailJS
  }
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_y2x5bwo", "temlate_o3hmaue", this).then(
        function () {
          alert("Message envoyé avec succès !");
          form.reset();
        },
        function (error) {
          alert("Erreur lors de l'envoi du message.");
        }
      );
    });
  }
});
