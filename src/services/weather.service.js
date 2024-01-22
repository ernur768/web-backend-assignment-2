
const normalizeWeatherData = (data) => ({
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    coord: data.coord,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind_speed: data.wind.speed,
    country_code: data.sys.country,
})

const WeatherService = {
    getData: async (city) => {
        const apiBase = 'https://api.openweathermap.org/data/2.5/weather?'
        const apiKey = '98328c06fafdb1211c0a019b833e62cb'
        const units = 'metric'

        const res = await fetch(apiBase + `appid=${apiKey}` + `&q=${city}` + `&units=${units}`)
        return normalizeWeatherData(await res.json())
    }
}

module.exports = WeatherService