import React, { useEffect, useState } from "react";
import MainTemplate from "../templates/main.template";
import { Toaster } from "../../shadcn/components/ui/toaster";
import { useToast } from "../../shadcn/components/ui/use-toast";
import LocationFields from "../molecules/location-fields.molecule";
import {
  ICoordinates,
  initCoordinates,
} from "../../interfaces/coordinates.interface";

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

  function validateCoordinates(name: string, value: string) {
    let regex;
    if (name === "Longitude") {
      regex = /^-?((1?[0-7]?|[1]?[0-9]?[0-9])(\.\d+)?|180(\.0+)?)$/;
    } else {
      regex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
    }
    return regex.test(value);
  }

  const handleChange = (name: string, value: string) => {
    const validCoordinates = validateCoordinates(name, value);
    if(!!!validCoordinates){
      toast({
        title: `Invalid input ${name.toLowerCase()}`,
        variant: "destructive",
        description: `"${value}" it is not a correct ${name.toLowerCase()} value`,
      });
      return;
    }

    if (name === "Longitude") setCoordinates({ ...coordinates, ...{ lng: value } });
    else setCoordinates({ ...coordinates, ...{ lat: value } });
  };

  return (
    <MainTemplate title="Area selector">
      <LocationFields coordinates={coordinates} handleChange={handleChange} />
      <Toaster />
    </MainTemplate>
  );
};

export default AreaPage;
