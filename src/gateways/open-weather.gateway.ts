import axios from "axios";
import { IWeatherData } from "../interfaces/open-weather.interface";
import { locationsData } from "../utils/locations";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "249efd60e5021ba25f979f2caac2b853";

export async function getWeatherData(
  locationId: number
): Promise<IWeatherData> {
  try {
    const locationData = locationsData.find((item) => item.id === locationId);
    if (!!!locationData) throw new Error();
    const coordinates = locationData.location.coordinates;

    const fullUrl = `${baseUrl}?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${apiKey}`;
    const response = await axios.get(fullUrl);

    if (response.status !== 200) throw new Error();

    const data = response.data;
    const weatherData: IWeatherData = {
      locationUrl: `https://www.google.com/maps/search/${coordinates[1]},${coordinates[0]}`,
      location: locationData.city,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };

    return weatherData;
  } catch (e) {
    throw e;
  }
}
