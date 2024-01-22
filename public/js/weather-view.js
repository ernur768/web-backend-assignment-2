const temperatureElement = document.getElementById('temperature');
const feelsLikeElement = document.getElementById('feels-like');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const pressureElement = document.getElementById('pressure');
const countryCodeElement = document.getElementById('countryCode');
const iconElement = document.getElementById('icon');

const form = document.querySelector('form');

const map = L.map('map')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

function showLocation(longitude, latitude) {
    map.setView([latitude, longitude], 12);
}

function setData(temperature, feelsLike, description, humidity, windSpeed, pressure, countryCode, icon) {
    temperatureElement.textContent = `Temperature: ${temperature}°C`
    feelsLikeElement.textContent = `Feels Like: ${feelsLike}°C`
    descriptionElement.textContent = `Description: ${description}`
    humidityElement.textContent = `Humidity: ${humidity}%`
    windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`
    pressureElement.textContent = `Pressure: ${pressure} Pa`
    countryCodeElement.textContent = `Country code: ${countryCode}`
    iconElement.textContent = `Icon: ${icon}`
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { city } = Object.fromEntries(new FormData(form).entries());

    fetch(`http://localhost:3000/api/weather?city=${city}`)
        .then(res => res.json())
        .then(({temp, description, icon, coord: {lon, lat}, feels_like, humidity, pressure, wind_speed, country_code}) => {
            setData(temp, feels_like, description, humidity, wind_speed, pressure, country_code, icon)
            showLocation(lon, lat)
        })
})

