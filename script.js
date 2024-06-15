const grid = document.getElementById("grid");
const form = document.querySelector("form");
const input = form.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() != " ") {
    showCountries(input.value);
  } else {
    alert("Merci de rechercher le pay");
  }
});

const showCountries = async (search) => {
  const request = await fetch(`https://restcountries.com/v3.1/name/${search}`);
  console.log(request);
  const countries = await request.json();
  console.log(countries);

  let list = "";

  countries.forEach((country) => {
    list += `
           <div>
        <h2>${country.traslations.fra.common}</h2>
        <img src="${country.flags.svg}" alt="${country.flags.alt}">
        <h3>${country.contients[0]}</h3>
        <h4></h4>
         </div> `;

         grid.innerHTML = list;
  })


};
