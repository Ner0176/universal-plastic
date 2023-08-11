import { useEffect, useState } from "react";
import CitySelector from "../molecules/city-selector.molecule";
import MainTemplate from "../templates/main.template";
import { getWeatherData } from "../../gateways/open-weather.gateway";
import { IWeatherData } from "../../interfaces/open-weather.interface";
import WeatherDisplayer from "../molecules/weather-displayer.molecule";

const initWeatherData: IWeatherData = {
  locationUrl: "",
  location: "-",
  weather: "-",
  description: "-",
  icon: "",
  temperature: 0,
  feelsLike: 0,
  humidity: 0,
  sunrise: 0,
  sunset: 0,
};

const WeatherPage = () => {
  const [location, setLocation] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<IWeatherData>(initWeatherData);

  useEffect(() => {
    (async () => {
      if(!!!location) return;
      const response: IWeatherData = await getWeatherData(location);
      if (!!!response) return;
      debugger;
      setWeatherData(response);
    })();
  }, [location]);

  const handleChangeLocation = (id: number) => {
    if(!!!id) setWeatherData(initWeatherData);
    setLocation(id);
  };

  return (
    <MainTemplate title="Weather City">
      <div className="flex flex-col">
        <CitySelector
          locationId={location}
          handleChange={handleChangeLocation}
        />
        <WeatherDisplayer weatherData={weatherData} locationId={location} />
      </div>
    </MainTemplate>
  );
};

export default WeatherPage;
