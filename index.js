
let curentTime = new Date();

function formatDate(date) {
  let hours = curentTime.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[curentTime.getDay()];
  let minutes = curentTime.getMinutes();
  let formattedDate = document.querySelector("#date");
  if (hours < 10) {
    formattedDate.innerHTML = `${day} 0${hours}:${minutes}`;
  }
  if (minutes < 10) {
    formattedDate.innerHTML = `${day} ${hours}:0${minutes}`;
  } else {
    formattedDate.innerHTML = `${day} ${hours}:${minutes}`;
  }
  return formattedDate;
}
formatDate(curentTime);

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
  console.log(date);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
 
}

let apiKey = "e450bc345a80a08ada69fd5c714d871d";
function search(e) {
  e.preventDefault();
  let curentCity = document.querySelector("#form-control");
  const userSearch = curentCity.value;

  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=metric&appid=${apiKey}`;
  axios.get(urlWeather).then(currentWeather);
}

let userForm = document.querySelector("#search-city");
userForm.addEventListener("submit", search);

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "e450bc345a80a08ada69fd5c714d871d";
  let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(urlForecast).then(displayForecast);
}

function currentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityTemp = document.querySelector("#temperature");
  cityTemp.innerHTML = temperature;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
  let kindWeather = document.querySelector("#kind-weather");
  kindWeather.innerHTML = response.data.weather[0].main;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  getForecast(response.data.coord);
}

function displayFahrenheitTemperature() {
  let temperatureElement = document.querySelector("#temperature");
  const tempData = +temperatureElement.innerText;
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (tempData * 9) / 5 + 32;

  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature() {
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  const tempData = +temperatureElement.innerText;
  let celsiusTemperature = ((tempData - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

