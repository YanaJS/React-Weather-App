import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function WeatherForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.forecastData.temp.max);
        return `${temperature}°`

    }

    function minTemp(){
        let temperature = Math.round(props.forecastData.temp.min);
        return `${temperature}°`

    }
    function day(props){
        let date = new date(props.forecastData.dt * 1000);
        let day = day.getDay();
        let days = [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ];

        return days[day];
}


    return (
    <div>
        <div className = "WeekForecastDay">{day()}</div>
         <WeatherIcon code = {props.forecastData.weather[0].icon} size= {36}/>
            <div className = "WeekForecastDay-temp">
                     <span className = "max-temp">{maxTemp()}°</span>
                     <span className = "min-temp">{minTemp()}°</span>
            </div>
    </div>

    );
}

