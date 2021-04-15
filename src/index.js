function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}`;
  document.querySelector("#wind").innerHTML =
    `Wind:` + Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
//city
function searchCity(city) {
  let apiKey = "ac95f3085442181daa713bccf8f5c8c5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let inputCity = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  if (inputCity.value) {
    h1.innerHTML = `${inputCity.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "ac95f3085442181daa713bccf8f5c8c5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#currentLoc");
currentLocationButton.addEventListener("click", getCurrentLocation);

//Date
let now = new Date();

let currentDate = document.querySelector("#current-date");
let currentTime = document.querySelector("#current-time");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

currentDate.innerHTML = `${day}, ${month} ${date} ${year}`;
currentTime.innerHTML = `${hours}: ${minutes}`;
