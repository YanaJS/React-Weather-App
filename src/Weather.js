import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherInfo from "./WeatherInfo";
import DailyWeatherForecast from "./DailyWeatherForecast";


import "./Weather.css";

export default function Weather(props) {
  //const[ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ready:false});
  const[city, setCity] = useState(props.defaultCity);


  function handleResponse(response){
   // console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature:response.data.main.temp,
      wind:response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      date: new Date (response.data.dt * 1000),
      time: new Date(),
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset
    });
  }
  
  function searchCity(){
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

  }


  function handleSubmit(event){
    event.preventDefault();
  searchCity();
    
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }
  
  if (weatherData.ready){
  return (
    <div>
      <div className="Weather">
        <ul>
          <li className="date"><FormattedDate date = {weatherData.date}/></li>
          <li className="time"><FormattedTime time = {weatherData.time}/></li>
        </ul>
          <form className="search" onSubmit = {handleSubmit}>
           <input
            type="text"
            placeholder="Enter a city..."
            className="city shadow-sm"
            autoFocus="on"
            autoComplete="off"
            onChange = {handleCityChange}
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
          <WeatherInfo data = {weatherData}/>
          <DailyWeatherForecast coords = {weatherData.coord}/>
    
      </div>
        <footer className="closureSentence">
           This project was coded by Yana Yaman and{""} is
           <a href="https://github.com/YanaJS/React-Weather-App"> Open-sourced on GitHub </a>
           and hosted on <a href="https://www.netlify.com"> Netlify</a>
        </footer>
    </div>
  );
  }else{
    searchCity();
 
  return "Loading...";

  }
}