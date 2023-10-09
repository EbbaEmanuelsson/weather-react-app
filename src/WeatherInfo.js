import React from "react";
import FormatteDate from "./FormatteDate.js";

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
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="float-left"
              />
              <span className="temperature float-left">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 mt-1">
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