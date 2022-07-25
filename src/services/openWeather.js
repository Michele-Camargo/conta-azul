import axios from "axios";

const openWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export default openWeather;

