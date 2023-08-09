import { FC, useState } from "react";
import ZoneTitle from "../atoms/zone-title.atom";
import Map from "../atoms/map.atom";
import { Slider } from "../../shadcn/components/ui/slider";
import { ICoordinates } from "../../interfaces/coordinates.interface";
import Loading from "../organisms/loading.organism";
import { MapContainer } from "react-leaflet";

interface IAreaZone {
  coordinates: ICoordinates;
}

const AreaZone: FC<IAreaZone> = ({ coordinates }) => {
  const [sliderValue, setSliderValue] = useState<number>(1);

  const handleChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  return (
    <div className="flex justify-start flex-col mt-5">
      {!!!Number(coordinates.lat) || !!!Number(coordinates.lng) ? (
        <Loading text="Loading map..." />
      ) : (
        <>
          <ZoneTitle title="Area" />
          <Slider
            min={0}
            max={20}
            value={[sliderValue]}
            onValueChange={handleChange}
          />
          <div className="mt-5 h-52">
            <MapContainer
              zoom={13}
              center={[+coordinates.lat, +coordinates.lng]}
              zoomControl={false}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <Map
                lat={+coordinates.lat}
                lng={+coordinates.lng}
                radius={sliderValue}
              />
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default AreaZone;
