import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    description: "Broken Clouds",
    date: "October 11, 2023",
    time: "Wednesday 12:27",
    temperature: "11",
    imgUrl: "https://openweathermap.org/img/wn/04n@2x.png",
    sunrise: "06:22",
    sunset: "19:55",
    wind: "6",
    humidity: "61",
  };
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
          placeholder="City..."
          className="city shadow-sm"
          autofocus="on"
          autocomplete="off"
        />
        <input
          type="submit"
          value="🔍Search"
          className="searching btn btn-primary shadow-sm"
        />
        <button
          className="current btn btn-success shadow-sm"
          id="current-location"
        >
          📍Current
        </button>
      </form>
      <div className="row">
        <div className="col-6">
          <ul className="current-city-weather">
            <li className="city-name-area">{weatherData.city}</li>
            <li className="cloudy capitalize">{weatherData.description}</li>
            <li className="temp">
              <span>
                <img
                  src={weatherData.imgUrl}
                  alt="Cloudy"
                  className="weather-icon"
                />
              </span>
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a>
                {""}|{""} <a href="/">°F</a>
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
     
       <p class="closureSentence">
    This project was coded by <a href="/#"> Yana Yaman </a> and is
    <a href="https://github.com/YanaJS/React-Weather-App"> Open-sourced on GitHub </a>
    and
     <a href="https://main--warm-sprite-d8fed5.netlify.app"> hosted on Netlify</a
    >
  </p>
  </div>
  );
}