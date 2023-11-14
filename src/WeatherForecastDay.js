import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function WeatherForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`

    }

    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`

    }
    function day(props){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
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
        <div className = "WeekForecastDay">{day(props)}</div>
         <WeatherIcon code = {props.data.weather[0].icon} size= {36}/>
            <div className = "WeekForecastDay-temp">
                     <span className = "max-temp">{maxTemp()}</span>
                     <span className = "min-temp">{minTemp()}</span>
            </div>
    </div>

    );
}

