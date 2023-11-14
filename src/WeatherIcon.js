import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLEAR_DAY",
        "03n": "CLEAR_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "PARTLY_CLOUDY_DAY",
        "10n": "PARTLY_CLOUDY_NIGHT",
        "11d": "SNOW",
        "11n": "SNOW",
        "13d": "SLEET",
        "13n": "SLEET",
        "50d": "FOG",
        "50n": "FOG"
        
    }

   return(
        <ReactAnimatedWeather
        icon = {codeMapping[props.code]}
        color = '#2b2525d'
        size = {props.size}
        animate = {true}
        />
   );
}




