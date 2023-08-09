import React, { useEffect, useState } from "react";
import MainTemplate from "../templates/main.template";

interface ICoordinates {
    lat: number;
    lng: number;
}

const initCoordinates: ICoordinates = {
    lat: 0,
    lng: 0,
}

const AreaPage = () => {
    const [coordinates, setCoordinates] = useState<ICoordinates>(initCoordinates);

    useEffect(() => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }
    }, [])

    function locationSuccess(pos: GeolocationPosition) {
        const { latitude, longitude } = pos.coords;
        setCoordinates({lat: latitude, lng: longitude});
    }

    const locationError = (error: GeolocationPositionError) => {
        const message = error.message;
    }

    return(
        <MainTemplate title="Area selector">
            
        </MainTemplate>
    )
}

export default AreaPage;