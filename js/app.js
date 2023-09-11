const btnGetWeather = document.getElementById('btnGetWeather')
const citySearch = document.getElementById('city')
let cityFound = {}
let cityTemp = {}
let cityWeather = {}
let cityWind = {}
let cityHumidity = {}
let cityUpdate = {}

btnGetWeather.addEventListener('click', () => {
    console.log('@@@ city => ', citySearch)
    if(citySearch.value.trim().length > 0) {
        getWeather(citySearch.value)
    } else {
        alert('Ciudad Vacia... no jodas')
        citySearch.focus()
    }
})

const newData = () => {
    const city = document.getElementById('newCity')
    const temp = document.getElementById('temp')
    const current_weather = document.getElementById('weather')
    const wind = document.getElementById('newWind')
    const humidity = document.getElementById('newHumidity')
    const update = document.getElementById('update')

    city.textContent = cityFound.city
    temp.textContent = cityTemp.temp
    current_weather.textContent = cityWeather.current_weather
    wind.textContent = cityWind.wind
    humidity.textContent = cityHumidity.humidity
    update.textContent = cityUpdate.update
}