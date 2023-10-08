import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(){
  let [weather, setWeather] = useState({ ready: false});

  function handleResponse(response){
    console.log(response);
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      feelslike: response.data.temperature.feels_like,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: "Wednesday 20:00",
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul className="text-capitalize">
          <li>{weather.date}</li>
          <li>{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-left"
              />
              <span className="temperature float-left">
                {Math.round(weather.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 mt-1">
            <ul>
              <li>Feels like: {Math.round(weather.feelslike)}°C</li>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city ="New York";
    const apiKey = "fc4oab2ba1a1af54f59bdb413t0b5a71";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
};