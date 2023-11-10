import React from "react";
import FormattedSunrise from "./FormattedSunrise";
import FormattedSunset from "./FormattedSunset";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
    return (
    <div className = "WeatherInfo">
        <div className="row">
            <div className="col-6">
                <ul className="current-city-weather">
                    <li className="city-name-area">{props.data.city}</li>
                    <li className="cloudy capitalize">{props.data.description}</li>
                    <li className="temp">
              <div className="weather-icon">
                <WeatherIcon 
                code = {props.data.icon} 
                />
              </div>
              <span className = "temp-in-units">{Math.round(props.data.temperature)}</span>
              <span className="units">
                <a href="/">  °C </a>
                {""}|{""} <a href="/"> °F</a>
              </span>
                    </li>
                </ul>
            </div>
            <div className="col-6">
                <ol className="parameters">
                    <li className="sunrise"><FormattedSunrise sunrise = {props.data.sunrise}/></li>

                    <li className="sunset"><FormattedSunset sunset = {props.data.sunset}/></li>

                    <li className="wind">🌬 Wind: {Math.round(props.data.wind)} km/h</li>

                    <li className="humidity">💧 Humidity: {props.data.humidity} %</li>
                </ol>
            </div>
        </div>
    </div>
    );
}