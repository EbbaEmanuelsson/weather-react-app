import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    function showFahrenhait(event) {
      event.prevntDefault();
      setUnit("fahrenhait");
    }

    function showCelsius(event){
        event.prevntDefault();
        setUnit("celsius");
    }
    
    if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature float-left">
          {Math.round(props.celsius)}
        </span>
        <span className="unit">
          °C | <a href="/" onClick={showFahrenhait}>°F</a>
        </span>
      </div>
    );
  } else {
    let fahrenhait = (props.celsius * 9/5) + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature float-left">
          {Math.round(fahrenhait)}
        </span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>°C</a>{" "}
          | °F
        </span>
      </div>
    );
  };
}
