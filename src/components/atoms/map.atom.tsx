import { FC, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, Marker, Circle, useMap } from "react-leaflet";
import { Icon } from "leaflet";

interface IMap {
  lat: number;
  lng: number;
  radius: number;
}

const Map: FC<IMap> = ({ lat, lng, radius,  }) => {
  const map = useMap();

  useEffect(() => {
    const newZoom = !!!radius ? 14 :  13 - Math.log2(radius);
    map.setZoom(newZoom);
    map.panTo([lat, lng]);
  }, [radius, lat, lng])

  const iconMarker = new Icon({
    iconUrl: require("../../images/icon-marker.png"),
    iconSize: [38, 38],
  });

  return (
    <div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={iconMarker} />
        <Circle center={[lat, lng]} radius={radius * 1000} color="#22D3EE" />
    </div>
  );
};

export default Map;
