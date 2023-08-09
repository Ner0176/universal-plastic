import { FC } from "react";
import TextField from "../atoms/text-field.atom";
import { ICoordinates } from "../../interfaces/coordinates.interface";

interface ILocationFields {
  coordinates: ICoordinates;
  handleChange: (name: string, value: string) => void;
}

const LocationFields: FC<ILocationFields> = ({ coordinates, handleChange }) => {
  return (
    <div className="h-screen">
      <div className="flex-auto flex justify-center">
        <div className="bg-cyan-50 flex flex-row">
          <TextField
            id="Latitude"
            placeholder="Ex: 41.33333"
            value={coordinates.lat}
            handleChange={handleChange}
            borderRight={true}
          />
          <TextField
            id="Longitude"
            placeholder="Ex: 1.93333"
            value={coordinates.lng}
            handleChange={handleChange}
            borderRight={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationFields;
