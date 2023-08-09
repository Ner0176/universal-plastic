import { RiHailLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";

const NavigationMenu = () => {
  const weather = window.location.href.includes("weather");
  return (
    <div className="border-cyan-100 border-t-2">
      <div className="py-2 flex flex-row">
        <a href="area" className="flex flex-1 justify-center">
          <RiMapPinLine size={"2em"} color={!!!weather ? "#19CAE5" : "#AEF4FF"} />
        </a>
        <a href="weather" className="flex flex-1 justify-center">
          <RiHailLine size={"2em"} color={weather ? "#19CAE5" : "#AEF4FF"} />
        </a>
      </div>
    </div>
  );
};

export default NavigationMenu;
