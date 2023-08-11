import { FC } from "react";
import { IWeatherData } from "../../interfaces/open-weather.interface";
import WeatherDisplayerData from "../atoms/weather-displayer-data.atom";
import { Progress } from "../../shadcn/components/ui/progress";
import WeatherDisplayerTop from "./weather-displayer-top.molecule";
import WeatherDisplayerMiddle from "./weather-displayer-middle.molecule";
import WeatherDisplayerBottom from "./weather-displayer-bottom.molecule";

interface IWeatherDisplayer {
  weatherData: IWeatherData;
  locationId: number;
}

const WeatherDisplayer: FC<IWeatherDisplayer> = ({ weatherData }) => {
  return (
    <div className="h-auto my-8 rounded-lg border-2 border-cyan-500 drop-shadow-md p-5">
      <WeatherDisplayerTop weatherData={weatherData} />
      <WeatherDisplayerMiddle weatherData={weatherData} />
      <WeatherDisplayerBottom weatherData={weatherData} />
    </div>
  );
};

export default WeatherDisplayer;
