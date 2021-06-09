require("./style.css");

//save link
const btnHamburger = document.querySelector("#btnHamburger");

//add event listener to the link
btnHamburger.addEventListener("click", function () {
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
  }
});
