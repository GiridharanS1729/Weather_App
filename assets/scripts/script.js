const city = document.querySelector(".city");
const cityName = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const climate = document.querySelector(".climate");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".city");
const btn = document.getElementById("btn");
const weather = document.querySelector(".weather");
const apiKey = "8a8370b9008b813dffaaaf4f721181a5";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const body = document.getElementsByTagName("body");
const error = document.querySelector(".error");
const desc = document.querySelector(".desc");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");
const mute = document.querySelector("#mute");
let currentAudio = null;

async function findWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status == 404 || searchBox.value == "") {
        error.style.display = "block";
        mute.style.display = "none";
        weather.style.display = "none";
        document.body.style.backgroundColor = "#353211";
    } else {
        console.log(data);
        mute.style.display = "block";
        weather.style.display = "block";
        error.style.display = "none";
        cityName.innerHTML = data.name;
        temp.innerHTML = data.main.temp + "°C";
        climate.innerHTML = data.weather[0].main;
        desc.innerHTML = data.weather[0].description;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "Km/hr";
        maxTemp.innerHTML = data.main.temp_max + "°C";
        minTemp.innerHTML = data.main.temp_min + "°C";
        console.log(data.weather[0].main);

        if (data.weather[0].main == "Clear") {
            document.body.style.backgroundImage = "url('./assets/images/clear.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/forest.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Clouds") {
            document.body.style.backgroundImage = "url('./assets/images/cloudy.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/wind.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Drizzle") {
            document.body.style.backgroundImage = "url('./assets/images/drizzling.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/birds.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Mist") {
            document.body.style.backgroundImage = "url('./assets/images/mist.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/hurricane.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Snow") {
            document.body.style.backgroundImage = "url('./assets/images/snow.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/snow.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Thunderstorm") {
            document.body.style.backgroundImage = "url('./assets/images/thunderstorm.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/thunder.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Rain") {
            document.body.style.backgroundImage = "url('./assets/images/rain.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/rain.mp3";
            audio.play();
            currentAudio = audio;
        } else if (data.weather[0].main == "Haze") {
            document.body.style.backgroundImage = "url('./assets/images/haze.png')";
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio();
            audio.src = "./assets/audio/thunder.mp3";
            audio.play();
            currentAudio = audio;
        } else {
            console.log("error");
        }
    }
}

btn.addEventListener("click", () => {
    findWeather(searchBox.value);

    console.log(searchBox.value);
});
var isMuted = false;

mute.addEventListener("click", function () {
    if (isMuted) {
        currentAudio.muted = false;
        mute.innerHTML = "<i class='fas fa-volume-up'></i>";
        console.log("Unmuted");
    } else {
        currentAudio.muted = true;
        mute.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>";

        console.log("Muted");
    }

    isMuted = !isMuted;
});
