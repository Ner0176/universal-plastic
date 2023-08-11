import { FC } from "react";
import Selector from "../atoms/selector.atom";
import ZoneTitle from "../atoms/zone-title.atom";

interface ICitySelector {
  locationId: number;
  handleChange: (id: number) => void;
}

const CitySelector: FC<ICitySelector> = (props) => {
  return (
    <div className="drop-shadow-md">
      <ZoneTitle title="City" />
      <div className="overflow-auto">
        <Selector
          locationId={props.locationId}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default CitySelector;
