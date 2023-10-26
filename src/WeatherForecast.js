import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(()=>{
  setLoaded(false);
  }, [props.city]);
  
  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }


  if (loaded){
    return (
      <div className="WeatherForecast">
        <div className="row mt-4 mb-4">
          {forecast.map(function (dailyForecast, index){
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );

  } else {
    let apiKey = "fc4oab2ba1a1af54f59bdb413t0b5a71";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}