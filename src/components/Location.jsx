import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo, useState } from "react";

function Location() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />
}

function Map() {
  
  //const center = useMemo(() => ({ lat: 26.86247, lng: 75.76241 }),[]);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 26.86247,
    lng: 75.76241,
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(userLocation); // ADDED
      });
    } else {
      // code for legacy browsers
    }
  };

  return (
    <GoogleMap
      zoom={20}
      center={currentLocation}
      mapContainerClassName="w-full h-screen"
    >
      <MarkerF onLoad={getUserLocation} position={currentLocation} />
    </GoogleMap>
  );
}

export default Location;
