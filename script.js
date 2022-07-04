"use strict";
const elForm = document.querySelector(".form");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const deg = document.querySelector(".deg");
const speed = document.querySelector(".speed");
const desc = document.querySelector(".desc");
const elInput = document.querySelector(".input")

let value;

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    value = elInput.value.toLowerCase();

    let weatherFunc = async function (data) {
        let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`);
        let response = await request.json();
        city.textContent = response.name;
        country.textContent = "Country: " + response.sys.country;
        deg.textContent = response.main.temp + "C";
        speed.textContent = response.wind.speed + "m/s";
        desc.textContent = response.weather[0].description;
        }
        weatherFunc(value);
        elInput.value = null;
})
