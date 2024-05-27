let search_bar = document.querySelector('.input')
let button = document.querySelector('button')
let city_text = document.querySelector('.city-text')
let weather = document.querySelector('.temp')
let des = document.querySelector('.weather-des')
let icon = document.querySelector('.w-pic')
let humadity = document.querySelector('.humidity')
let wind_speed = document.querySelector('.wind')
let loader = document.querySelector('.loader')
// let del = document.querySelector('i')

 async function checkweather(city) {
    event.preventDefault()
    search_bar.value = ''
    loader.style.display = 'block'
    // del.innerHTML = ''
    // del.style.display = 'inline'
    let API_key = '1159472b001a97d0d78be1777edf32a1'
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    const weather_data =  await fetch(URL) .then(response =>  response.json())
    loader.style.display = 'none'
    weather.innerHTML = (weather_data.main.temp - 273.15).toFixed(2) + '<sup>°C</sup>';
    city_text.innerHTML = `Weather in ${weather_data.name}`
    des.innerHTML = weather_data.weather[0].description
    humadity.innerHTML = `Humidity: ${weather_data.main.humidity}%`
    wind_speed.innerHTML = `Wind Speed: ${weather_data.wind.speed}km/h`
    console.log(weather_data);
    switch (weather_data.weather[0].description) {
        case 'clear sky':
            icon.src='https://openweathermap.org/img/wn/01d.png'
            break;
            case 'fog':
                icon.src='https://openweathermap.org/img/wn/50d.png'
            break;
            case 'scattered clouds':
                icon.src='https://openweathermap.org/img/wn/03d.png'
                break;
            case 'broken clouds':
            icon.src='https://openweathermap.org/img/wn/04d.png '
            break;
            case 'thunderstorm':
            icon.src='https://openweathermap.org/img/wn/11d.png'
            break;
            case 'few clouds':
            icon.src='https://openweathermap.org/img/wn/02d.png'
            break;
            case 'light rain':
            icon.src='https://openweathermap.org/img/wn/10n.png'
            break;
            case 'overcast clouds':
            icon.src='https://openweathermap.org/img/wn/04d.png'
            break;
            case 'haze':
            icon.src='https://openweathermap.org/img/wn/50d.png'
            break;
                
        default:
            break;
    }

}

button.addEventListener('click', () => {
    checkweather(search_bar.value)
})
search_bar.addEventListener('keypress', () => {
    if (event.key === 'Enter') {
        checkweather(search_bar.value)    
    } 
})
