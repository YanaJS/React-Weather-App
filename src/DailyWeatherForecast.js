import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./DailyWeatherForecast.css";
import axios from "axios";





export default function DailyWeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect (() => {
        setLoaded(false);
    }, [props.coords]);
   
   
    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
function load(){
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

}

if(loaded){
   // console.log(forecast);
    return (
        <div className = "daily-weather-forecast">
            <hr />
            <div className = "row">
            {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }else{
                return null;
            }
          })}
        </div>
      </div>
    );
}else{
   load();
    return null;  
}
}
            
