import { FC } from "react";
import { MdLocationPin } from "react-icons/md";

interface IWeatherDisplayerData {
  title: string;
  data: string;
  showIcon?: boolean;
}

const WeatherDisplayerData: FC<IWeatherDisplayerData> = ({
  title,
  data,
  showIcon,
}) => {
  return (
    <div className=" flex flex-col mr-5 items-center">
      <div className="font-bold underline underline-offset-4 mb-2 opacity-50">{title}</div>
      <div className="flex flex-row justify-center items-center">
        {!!showIcon && data !== "-" ? <MdLocationPin size={"1.5em"} className="opacity-70"/> : null}
        {data}
      </div>
    </div>
  );
};

export default WeatherDisplayerData;
