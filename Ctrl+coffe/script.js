// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
//Sidebar klik
document.querySelector("#coffe-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik luar sidebar to out nav
const coffe = querySelector("#coffe-menu");

document.addEventListener("click"),
  function (e) {
    if (!coffe.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  };
