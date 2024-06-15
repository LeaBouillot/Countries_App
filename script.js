const grid = document.getElementById("grid");
const form = document.querySelector("form");
const input = form.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() != "") {
    showCountries(input.value);
  } else {
    alert("Merci de rechercher le pay");
  }
});




