import { useEffect, useState } from "react";
import { useToast } from "../../shadcn/components/ui/use-toast";
import {
  ICoordinates,
  initCoordinates,
} from "../../interfaces/coordinates.interface";
import MainTemplate from "../templates/main.template";
import LocationZone from "../molecules/location-zone.molecule";
import AreaZone from "../molecules/area-zone.molecule";
import { Toaster } from "../../shadcn/components/ui/toaster";

const AreaPage = () => {
  const { toast } = useToast();
  const [coordinates, setCoordinates] = useState<ICoordinates>(initCoordinates);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
  }, []);

  function locationSuccess(pos: GeolocationPosition) {
    const { latitude, longitude } = pos.coords;
    setCoordinates({ lat: latitude.toString(), lng: longitude.toString() });
  }

  function locationError(error: GeolocationPositionError) {
    const message = error.message;
    toast({
      title: "Error while obtaining coordinates",
      variant: "destructive",
      description: message,
    });
  }

  const handleChange = (name: string, value: string) => {
    if (name === "Longitude")
      setCoordinates({ ...coordinates, ...{ lng: value } });
    else setCoordinates({ ...coordinates, ...{ lat: value } });
  };

  const latitudeValidation = (value: string) => {
    const regex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
    if (!!!regex.test(value)) {
      setCoordinates({
        ...coordinates,
        ...{ lat: "Obtaining longitude..." },
      });
      return false;
    }
    return true;
  };

  const longitudeValidation = (value: string) => {
    const regex = /^-?((1?[0-7]?|[1]?[0-9]?[0-9])(\.\d+)?|180(\.0+)?)$/;
    if (!!!regex.test(value)) {
      setCoordinates({ ...coordinates, ...{ lng: "Obtaining latitude..." } });
      return false;
    }
    return true;
  };

  const handleValidation = (name: string, value: string) => {
    const isValid =
      name === "Longitude"
        ? longitudeValidation(value)
        : latitudeValidation(value);
    if (!!!isValid) {
      toast({
        title: `Invalid input ${name.toLowerCase()}`,
        variant: "destructive",
        description: `"${value}" it is not a correct ${name.toLowerCase()} value`,
      });
      return;
    }
  };

  return (
    <MainTemplate title="Area selector">
      <div className="flex flex-col">
        <LocationZone
          coordinates={coordinates}
          handleChange={handleChange}
          handleValidate={handleValidation}
        />
        <AreaZone coordinates={coordinates} />
        <Toaster />
      </div>
    </MainTemplate>
  );
};

export default AreaPage;
