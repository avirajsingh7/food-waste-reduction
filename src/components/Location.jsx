import { GoogleMap, MarkerF } from "@react-google-maps/api";

function Location(props) {

  const currentLocation = {
    lat: parseFloat(props.latitude),
    lng: parseFloat(props.longitude),
  };

  return (
    <GoogleMap
      zoom={20}
      center={currentLocation}
      mapContainerClassName="w-screen h-screen"
    >
      <MarkerF position={currentLocation} />
    </GoogleMap>
  );
}

export default Location;
