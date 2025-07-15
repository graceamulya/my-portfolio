// ===== DYNAMIC YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== MOBILE NAV TOGGLE =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("open");
  });
});

// ===== CONTACT FORM HANDLER =====
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  alert(`Thank you, ${data.name}! Your message has been sent.`);
  form.reset();
});
