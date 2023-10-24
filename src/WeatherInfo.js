import React from "react";
import FormatteDate from "./FormatteDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul className="text-capitalize">
          <li>
            <FormatteDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-2 MarginIcon">
            <div className="clearfix d-flex align-items-center InfoIcon">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="float-left mr-5"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="float-left mt-3">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-5 mt-2 list">
            <ul>
              <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}