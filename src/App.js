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
      <Card city="Urubaci, BR" 
        temperature="19" 
        humidity="75" 
        pressure="892" 
        updated="02:48:27"/>
      <Card city="Nuuk, GL" 
        temperature="-4" 
        humidity="60" 
        pressure="986" 
        updated="02:48:27"/>
      <Card city="Nairobi, KE" 
        temperature="31" 
        humidity="75" 
        pressure="856" 
        updated="02:48:27"/>
    </div>
  );
}

export default App;
