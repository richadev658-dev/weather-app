document.addEventListener("DOMContentLoaded", function(){

const apiKey="1b6cabb1613c17572dbf3cf7a76899dd"

document.getElementById("btn").addEventListener("click",getWeather)

async function getWeather(){

const city=document.getElementById("city").value

document.getElementById("loading").style.display="block"

try{

const res=await fetch(
"https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric"
)

const data=await res.json()

showWeather(data)

getForecast(city)

}

catch(error){

alert("City not found")

}

document.getElementById("loading").style.display="none"

}

function showWeather(data){

document.getElementById("cityName").innerHTML=data.name

document.getElementById("temp").innerHTML="Temperature: "+data.main.temp+" °C"

document.getElementById("desc").innerHTML=data.weather[0].description

document.getElementById("humidity").innerHTML="Humidity: "+data.main.humidity+"%"

document.getElementById("wind").innerHTML="Wind: "+data.wind.speed+" km/h"

document.getElementById("icon").src=
"https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"

}

async function getForecast(city){

const res=await fetch(
"https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey+"&units=metric"
)

const data=await res.json()

const forecastDiv=document.getElementById("forecast")

forecastDiv.innerHTML=""

for(let i=0;i<5;i++){

const day=data.list[i*8]

forecastDiv.innerHTML+=`
<div class="forecast-day">
<p>${day.dt_txt.split(" ")[0]}</p>
<p>${day.main.temp}°C</p>
</div>
`

}

}

})
