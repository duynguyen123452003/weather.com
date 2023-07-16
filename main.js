var searchInput = document.getElementById('search-input');
var cityName = document.querySelector('.city-name');
var temperature = document.querySelector('.temperature');
var weatherState = document.querySelector('.weather-state');
var weatherIcon = document.querySelector('.weather-icon');
var valueSunrise = document.querySelector('.value.sunrise');
var valueSunset = document.querySelector('.value.sunset');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.wind-speed');

if(searchInput.value == ''){
    api('ha noi');
}

async function api(country) {
    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=4675b16421aa258a05a9b4c83770b04c`).then(res => res.json());
    cityName.innerText = data.name;
    temperature.innerText = Math.round((data.main.temp-273.15));
    weatherState.innerText = data.weather[0].description;
    console.log(data);
    weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    valueSunrise.innerText = moment.unix(data.sys.sunrise).format('H:mm');
    valueSunset.innerText = moment.unix(data.sys.sunset).format('H:mm');
    humidity.innerText = data.main.humidity;
    windSpeed.innerText = data.wind.speed;
}

searchInput.addEventListener('change',function(){
    api(searchInput.value.trim());
})
