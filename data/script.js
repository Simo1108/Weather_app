const API_KEY = "6bfc30471a0731f63221660b6f2ba7af";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    const data = await response.json()
    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    const tempCelcius = Math.round(data.main.temp);
    document.querySelector(".temp").innerHTML = tempCelcius + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./data/img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./data/img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./data/img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./data/img/drizzle.png";
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./data/img/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";
}
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather();