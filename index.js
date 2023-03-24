<<<<<<< HEAD
let curentTime = new Date();

function formatDate (date) {
let hours = curentTime.getHours();
console.log(hours);
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
  let cityTemp = document.querySelector("#celcium");
  cityTemp.innerHTML = temperature;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
  let kindWeather = document.querySelector("#kind-weather");
  kindWeather.innerHTML = response.data.weather[0].main;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  console.log(response.data)
  }
  
function yourPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "c53c5911e4701f6cd25268968349210b";
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(urlWeather).then(currentWeather);
    
}
let currentPosition = document.querySelector("#current-location-button");
currentPosition.addEventListener("click", currentWeatherNew);


function currentWeatherNew() {
navigator.geolocation.getCurrentPosition(yourPosition);
=======
let curentTime = new Date();

function formatDate (date) {
let hours = curentTime.getHours();
console.log(hours);
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
  let cityTemp = document.querySelector("#celcium");
  cityTemp.innerHTML = temperature;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
  let kindWeather = document.querySelector("#kind-weather");
  kindWeather.innerHTML = response.data.weather[0].main;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  console.log(response.data)
  }
  
function yourPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "c53c5911e4701f6cd25268968349210b";
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(urlWeather).then(currentWeather);
    
}
let currentPosition = document.querySelector("#current-location-button");
currentPosition.addEventListener("click", currentWeatherNew);


function currentWeatherNew() {
navigator.geolocation.getCurrentPosition(yourPosition);
>>>>>>> 558c55edc9ca95605279d0eda26bed53e0c78edb
}