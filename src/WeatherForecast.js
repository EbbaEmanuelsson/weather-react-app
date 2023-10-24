import React from "react";
import "./WeatherForecast.css";
import Weather from "./Weather";
import axios from "axios";

export default function WeatherForecast(props){
  function handleResponse(response){
    console.log(response);
  }
  let apiKey = "fc4oab2ba1a1af54f59bdb413t0b5a71";
  let city = props.data.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row mt-3 mb-3">
          <div className="col">
            <div className="WeatherForecastDay">Mon</div>
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="WeatherForecastIcon"
            />
            <div>
              <span className="WeatherForecastMax">19°</span>
              <span className="WeatherForecastMin">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}