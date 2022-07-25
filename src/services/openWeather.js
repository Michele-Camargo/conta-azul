import axios from "axios";
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 10 * 60 * 1000 // ten minutes
})

const openWeather = axios.create({
  adapter: cache.adapter,
  baseURL: "https://api.openweathermap.org",
});

export default openWeather;

