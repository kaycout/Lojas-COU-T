document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuDropdown = document.querySelector(".menu-dropdown");

  menuBtn.addEventListener("click", () => {
    menuDropdown.style.display =
      menuDropdown.style.display === "block" ? "none" : "block";
  });

  // fecha se clicar fora
  window.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
      menuDropdown.style.display = "none";
    }
  });
});
