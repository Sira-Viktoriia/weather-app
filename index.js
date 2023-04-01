
let curentTime = new Date();

function formatDate (date) {
let hours = curentTime.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[curentTime.getDay()];
let minutes = curentTime.getMinutes();
let formattedDate = document.querySelector("#date");
if (hours < 10 ) {
  formattedDate.innerHTML = `${day} 0${hours}:${minutes}`;
} if (minutes < 10) {
  formattedDate.innerHTML = `${day} ${hours}:0${minutes}`;
}
  else {formattedDate.innerHTML = `${day} ${hours}:${minutes}`;
}

 return formattedDate;
} 
formatDate(curentTime);

let apiKey = "c53c5911e4701f6cd25268968349210b";

function search(event) {
  event.preventDefault();
  let curentCity = document.querySelector("#form-control");
  const userSearch = curentCity.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = userSearch;
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=metric&appid=${apiKey}`;
axios.get(urlWeather).then(currentWeather);

    }
let userForm = document.querySelector("#search-city");
userForm.addEventListener("submit", search);


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
  // iconElement.setAttribute(
  //   "src",
  //   `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  // );
  // iconElement.setAttribute("alt", response.data.weather[0].description);
  }
  
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (temperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);
}

let temperature = null;

let form = document.querySelector("#search-city");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");