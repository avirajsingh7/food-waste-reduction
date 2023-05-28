import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const libraries = ["places"];

function Location(props) {
  const [location, setLocation] = useState({
    lat: 40.6851868,
    lng: -73.97599050000001
  })

  useEffect(() => {
    setLocation({
      lat: parseFloat(props.latitude),
      lng: parseFloat(props.longitude),
    });
  }, [props.latitude, props.longitude]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAP_API_KEY, // Replace with your actual API key
    libraries: libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  return (
    <GoogleMap
      zoom={20}
      center={location}
      mapContainerClassName="w-full h-full"
    >
      <MarkerF position={location} />
    </GoogleMap>
  );
}

export default Location;
