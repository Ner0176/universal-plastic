import { FC } from "react";
import TextField from "../atoms/text-field.atom";
import { ICoordinates } from "../../interfaces/coordinates.interface";
import ZoneTitle from "../atoms/zone-title.atom";

interface ILocationZone {
  coordinates: ICoordinates;
  handleChange: (name: string, value: string) => void;
  handleValidate: (name: string, value: string) => void;
}

const LocationZone: FC<ILocationZone> = ({ coordinates, handleChange, handleValidate }) => {
  return (
    <div className="flex flex-1 flex-col">
      <ZoneTitle title="Location" />
      <div className="bg-cyan-50 flex flex-row ">
        <TextField
          id="Latitude"
          placeholder="Ex: 41.33333"
          value={coordinates.lat}
          handleChange={handleChange}
          handleValidate={handleValidate}
          borderRight={true}
        />
        <TextField
          id="Longitude"
          placeholder="Ex: 1.93333"
          value={coordinates.lng}
          handleChange={handleChange}
          handleValidate={handleValidate}
          borderRight={false}
        />
      </div>
    </div>
  );
};

export default LocationZone;
