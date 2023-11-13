import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";




export default function DailyWeatherForecast(){
    return (
<div className = "daily-weather-forecast">
    <hr />
    <div className = "row">
        <div className = "col">
            <div className = "WeekForecastDay">Mon</div>
                <WeatherIcon code = "01d" size= {36}/>
                <div className = "WeekForecastDay-temp">
                    <span className = "max-temp">19°</span>
                    <span className = "min-temp">10°</span>
                </div>
            </div>
            
        </div>
        
</div>


    );

}