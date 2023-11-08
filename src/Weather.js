import React, {useState} from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  //const[ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ready:false});


  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature:response.data.main.temp,
      wind:response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "November 7, 2023",
     
      

    });
  }
  
  
  



  if (weatherData.ready){
  return (
    <div>
    <div className="Weather">
      <ul>
        <li className="date">{weatherData.date}</li>
        <li className="date">{weatherData.time}</li>
      </ul>
      <form className="search">
        <input
          type="text"
          placeholder="Enter a city..."
          className="city shadow-sm"
          autoFocus="on"
          autoComplete="off"
        />
        <input
          type="submit"
          value="🔍Search"
          className="searching btn btn-primary shadow-sm"
        />
        <input
        type="submit"
        value="📍Current"
          className="current btn btn-success shadow-sm"
          />
        </form>
      <div className="row">
        <div className="col-6">
          <ul className="current-city-weather">
            <li className="city-name-area">{weatherData.city}</li>
            <li className="cloudy capitalize">{weatherData.description}</li>
            <li className="temp">
              <span>
                <img
                  src={weatherData.iconUrl}
                  alt="Cloudy"
                  className="weather-icon"
                />
              </span>
              <span className = "temp-in-units">{Math.round(weatherData.temperature)}</span>
              <span className="units">
                <a href="/">  °C </a>
                {""}|{""} <a href="/"> °F</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ol className="parameters">
            <li className="sunrise">🌅 Sunrise: {weatherData.sunrise}</li>

            <li className="sunset">🌆 Sunset: {weatherData.sunset}</li>

            <li className="wind">🌬 Wind: {weatherData.wind} km/h</li>

            <li className="humidity">💧 Humidity: {weatherData.humidity} %</li>
          </ol>
        </div>
      </div>
    </div>
     
       <footer class="closureSentence">
    This project was coded by Yana Yaman and{""} is
    <a href="https://github.com/YanaJS/React-Weather-App"> Open-sourced on GitHub </a>
    and hosted on <a href="https://www.netlify.com"> Netlify</a>
  </footer>
  </div>
  );

}else{
  const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";

}
}