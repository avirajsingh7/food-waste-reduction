import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

function Map() {

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAP_API_KEY,
    });
    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(map.center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        center={{ lat: 26.862471, lng: 75.762413 }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : (
      <div>Loading...</div>
    );
}

export default Map;
