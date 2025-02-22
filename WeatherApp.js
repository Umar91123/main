const apiKey="52d4835a19c8b591a9d8b3c421149b8a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
    const data= await response.json();
    if(response.status===404){
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".error").style.display="none";
    }
    console.log(data);

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".cityName").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Humidity"){
        weatherIcon.src="images/humidity.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Search"){
        weatherIcon.src="images/search.png"
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png"
    }
    else if(data.weather[0].main=="Wind"){
        weatherIcon.src="images/wind.png"
    };


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

