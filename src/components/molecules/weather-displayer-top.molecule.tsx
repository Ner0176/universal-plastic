import { FC } from "react";
import WeatherDisplayerData from "../atoms/weather-displayer-data.atom";
import { IWeatherData } from "../../interfaces/open-weather.interface";

interface IWeatherDisplayerTop {
  weatherData: IWeatherData;
}

const WeatherDisplayerTop: FC<IWeatherDisplayerTop> = ({ weatherData }) => {
  return (
    <div className="flex-1 flex flex-row pb-2 border-b-2 border-cyan-100">
      {!!!weatherData.icon ? null : (
        <div className="drop-shadow-lg flex">
          <img
            src={weatherData.icon}
            className="drop-shadow-lg h-16 rounded-full border"
          />
        </div>
      )}
      <div className="flex-1 flex flex-row justify-evenly items-center m-3">
        <WeatherDisplayerData title="WEATHER" data={weatherData.weather} />
        <WeatherDisplayerData
          title="DESCRIPTION"
          data={weatherData.description}
        />
      </div>
    </div>
  );
};

export default WeatherDisplayerTop;
