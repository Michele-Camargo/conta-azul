import React from "react";
import './styles.css';

function Card() {
  return (
    <div id="card">
      <div id="city">
        <span>Urubici, BR</span>
      </div>
      <div id="temperature">
        <span>19°</span> 
      </div>
      <div id="footer">
        <div id="humidityPressure">
          <div id="humidity">
            <span id="aaa">HUMIDITY</span><br/>
            <span id="value">75%</span>
          </div>
          <div id="pressure">
            <span id="aaa">PRESSURE</span><br/>
            <span id="value">892hPa</span>
          </div>
        </div>
        <span id="updated">
          Updated at 02:48:28 PM
        </span>
      </div>
    </div>
  );
};

export default Card;