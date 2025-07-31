// login page popup part start
function popupMenu() {
  document.querySelector("#popup-menu").classList.add("showLoginForm");
  document.querySelector(".overlay").classList.add("overlay-visible");
}
function popupClose() {
  document.querySelector("#popup-menu").classList.remove("showLoginForm");
  document.querySelector(".overlay").classList.remove("overlay-visible");
}
let btnClose = document.getElementById("close-popup");
btnClose.addEventListener("click", popupClose);

// login page popup part start

// Signup page popup part start

function signupPopupMenu() {
  document.querySelector("#signup-popup-menu").classList.add("showSignupForm");
  document
    .querySelector(".signup-overlay")
    .classList.add("signup-overlay-visible");
}
function signupPopupClose() {
  document
    .querySelector("#signup-popup-menu")
    .classList.remove("showSignupForm");
  document
    .querySelector(".signup-overlay")
    .classList.remove("signup-overlay-visible");
}
let signupBtnClose = document.getElementById("close-signup-popup");
signupBtnClose.addEventListener("click", signupPopupClose);

// Signup page popup part start
