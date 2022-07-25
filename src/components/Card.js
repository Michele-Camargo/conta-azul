import React from "react";
import './styles.css';

function Card({city, temperature, humidity, pressure, updated}) {
  let colorOFTemperature;

  if (temperature <= 5) {
    colorOFTemperature = "#69A3FF"
  } else if (temperature > 5 && temperature <= 25) {
    colorOFTemperature = "#FF9632";
  } else {
    colorOFTemperature = "#ED1946";
  }

  return (
    <div id="card">
      <div id="city">
        <span>{city}</span>
      </div>
      <div id="temperature">
    <span style={{color: colorOFTemperature}}>{temperature}°</span> 
      </div>
      <div id="footer">
        <div id="humidityPressure">
          <div id="humidity">
            <span id="aaa">HUMIDITY</span><br/>
            <span id="value">{humidity}%</span>
          </div>
          <div id="pressure">
            <span id="aaa">PRESSURE</span><br/>
            <span id="value">{pressure}hPa</span>
          </div>
        </div>
        <span id="updated">
          Updated at {updated}
        </span>
      </div>
    </div>
  );
};

export default Card;