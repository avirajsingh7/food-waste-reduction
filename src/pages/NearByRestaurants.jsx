import { useLocation } from "react-router-dom";
import Location from "../components/Location";

function NearByRestaurants() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const latitude = params.get("lat");
  const longitude = params.get("lng");
  
  return (
    <div className="w-screen h-screen">
      <Location
        latitude={latitude}
        longitude={longitude}
      />
    </div>
  );
}

export default NearByRestaurants;
