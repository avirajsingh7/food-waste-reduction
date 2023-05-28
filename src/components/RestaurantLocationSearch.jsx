import React, {useRef} from "react";
import { FaSearch } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { useLoadScript,Autocomplete } from "@react-google-maps/api";

const libraries = ["places"]

function RestaurantLocationSearch(props) {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const place = inputRef.current.getPlace();
      if (place) {
      console.log(place.formatted_address);
      props.setRestaurantLocation( {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        country: place.address_components.find(component =>
    component.types.includes("country")
          )?.long_name,
        state: place.address_components.find(component =>
    component.types.includes("administrative_area_level_1")
          )?.long_name,
        locality: place.address_components.find(component =>
    component.types.includes("locality")
          )?.long_name,
        postalCode: place.address_components.find(component =>
    component.types.includes("postal_code")
          )?.long_name,        
      });
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude      
          };
          
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
              userLocation.lat
            },${userLocation.lng}&key=${
              import.meta.env.VITE_REACT_APP_GOOGLE_MAP_API_KEY
            }`
          )
            .then((response) => response.json())
            .then((data) => {
              const country = data.results[0].address_components.find(
                (component) => component.types.includes("country")
              )?.long_name;

              const state = data.results[0].address_components.find(
                (component) =>
                  component.types.includes("administrative_area_level_1")
              )?.long_name;

              const locality = data.results[0].address_components.find(
                (component) => component.types.includes("locality")
              )?.long_name;
              const postalCode = data.results[0].address_components.find(
                (component) => component.types.includes("postal_code")
              )?.long_name;

              // Update the restaurant location with the postal code
              props.setRestaurantLocation((prevLocation) => ({
                  ...prevLocation,
                  lat: userLocation.lat,
                  lng: userLocation.lng,
                  country: country || "",
                  state: state || "",
                  locality: locality || "",
                  postalCode: postalCode || "",

              }));
            })
            .catch((error) => {
              console.error("Error fetching postal code:", error);
            });
    });
    }
  };
    
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAP_API_KEY, // Replace with your actual API key
    libraries: libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="mt-3">
      <div className="bg-white w-full rounded-xl h-12 flex items-center px-4 border">
        <FaSearch className="text-primary text-xl" />
        <Autocomplete
          className="w-full"
          onLoad={(ref) => (inputRef.current = ref)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            placeholder="Type to Search..."
            className="bg-transparent border-none text-xl h-full w-full ml-2.5 focus:outline-none"
          />
        </Autocomplete>
        <TbCurrentLocation
          onClick={getUserLocation}
          className="text-primary text-2xl ml-4"
        />
      </div>
    </div>
  );
}

export default RestaurantLocationSearch;
