document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isOpen);
    document.querySelector(".site-header").classList.toggle("nav-open");
    mainNav.setAttribute("aria-hidden", isOpen);
  });
});
