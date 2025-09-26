const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".menu-dropdown");

menuBtn.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Fecha o menu se clicar fora
window.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-container")) {
    dropdown.style.display = "none";
  }
});
