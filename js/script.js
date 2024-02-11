const hm_img = document.querySelector(".hamburger-menu");
const hmNavbar_div = document.querySelector(".navbar-menu");
const navbar_nav = document.querySelector(".navbar");

hm_img.addEventListener("click", () => {
  hmNavbar_div.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hm_img.contains(e.target) && !navbar_nav.contains(e.target)) {
    hmNavbar_div.classList.remove("active");
  }
});
