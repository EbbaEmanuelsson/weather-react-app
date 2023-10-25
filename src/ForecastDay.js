import React from "react";


export default function ForecastDay(props){
    function maxTemp() {
        let temperature = Math.round(props.data[0].temperature.maximum);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data[0].temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
      let date = new Date(props.data[0].time * 1000);
      let day = date.getDate();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    }


    return (
      <div className="ForecastDay">
        <div className="WeatherForecastDay">{day()}</div>
        <img
          src={props.data[0].condition.icon_url}
          alt={props.data[0].condition.description}
          className="WeatherForecastIcon"
        />
        <div>
          <span className="WeatherForecastMax">
            {maxTemp()}
          </span>
          <span className="WeatherForecastMin">
            {minTemp()}
          </span>
        </div>
      </div>
    );
}