function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";

}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";

}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

const loading = document.getElementById("loading");

const loadingDuration = 3000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);