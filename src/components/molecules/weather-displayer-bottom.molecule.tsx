import { FC } from "react";
import WeatherDisplayerData from "../atoms/weather-displayer-data.atom";
import { IWeatherData } from "../../interfaces/open-weather.interface";
import { Progress } from "../../shadcn/components/ui/progress";

interface IWeatherDisplayerBottom {
  weatherData: IWeatherData;
}

const WeatherDisplayerBottom: FC<IWeatherDisplayerBottom> = ({weatherData}) => {
  const formatTemperature = (kelvin: number) => {
    if (!!!kelvin) return "-";
    const celsius = kelvin - 273.15;
    return `${celsius.toFixed(2)}°C`;
  };
  return (
    <>
      <div className="flex-1 flex flex-row justify-evenly items-center m-3">
        <WeatherDisplayerData
          title="TEMPERATURE"
          data={formatTemperature(weatherData.temperature)}
        />
        <WeatherDisplayerData
          title="FEELS LIKE"
          data={formatTemperature(weatherData.feelsLike)}
        />
      </div>
      <div className="px-3 mb-5">
        <div className="flex-1 flex justify-end pr-3 mb-2 text-sm opacity-60">
          {!!!weatherData.humidity ? "-" : `${weatherData.humidity}% humidity`}
        </div>
        <Progress value={weatherData.humidity} />
      </div>
    </>
  );
};

export default WeatherDisplayerBottom;
