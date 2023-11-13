import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./DailyWeatherForecast.css";
import axios from "axios";





export default function DailyWeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
}


if(loaded){
    //console.log(forecast);
    return (
        <div className = "daily-weather-forecast">
            <hr />
            <div className = "row">
                    <div className = "col">
                       <WeatherForecastDay forecastData = {forecast[0]}/>
                    </div>
            </div>
                
        </div>
        
        
            );
   
}else{
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
   let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);
    return null;

    
    
   
}
}
            
