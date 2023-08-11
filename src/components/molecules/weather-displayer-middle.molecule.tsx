import { FC } from "react";
import WeatherDisplayerData from "../atoms/weather-displayer-data.atom";
import { IWeatherData } from "../../interfaces/open-weather.interface";

interface IWeatherDisplayerMiddle {
    weatherData: IWeatherData
}

const WeatherDisplayerMiddle: FC<IWeatherDisplayerMiddle> = ({ weatherData }) => {
  const transformTime = (timestamp: number) => {
    if (!!!timestamp) return "-";
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes} h`;
  };
  return (
    <div className="flex-1 flex flex-row justify-evenly items-center m-3 pb-4">
      <WeatherDisplayerData
        title="SUNRISE"
        data={transformTime(weatherData.sunrise)}
      />
      <WeatherDisplayerData
        title="SUNSET"
        data={transformTime(weatherData.sunset)}
      />
      <a
        href={!!!weatherData.locationUrl ? undefined : weatherData.locationUrl}
        target="_blank"
      >
        <WeatherDisplayerData
          title="LOCATION"
          data={weatherData.location}
          showIcon={true}
        />
      </a>
    </div>
  );
};

export default WeatherDisplayerMiddle;
