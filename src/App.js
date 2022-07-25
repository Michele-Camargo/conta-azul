import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import openWeather from './services/openWeather'

function App() {

  let result; 
  result = useEffect(() =>{
    openWeather
    .get("data/3.0/onecall?lat=64.11&lon=51.42&exclude=minutely,hourly,daily,alerts,&appid=a4b40ad2cf3c62198a768a407cec")
    .then((response) => console.log(response.data))
    .catch((err) => { console.error("Erro:  " + err)})
  })
  return (
    <div id="App">
      <Card/>
      <span>{result}</span>
    </div>
  );
}

export default App;
