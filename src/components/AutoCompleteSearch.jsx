import React, {useRef} from "react";
import { FaSearch } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

function AutocompleteSearch() {
  const inputRef = useRef();
  const navigate = useNavigate();
  
  const handlePlaceChanged = () => {
    const place = inputRef.current.getPlace();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
      const userLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      navigate(
        `/your-location?lat=${userLocation.lat}&lng=${userLocation.lng}`
      );
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        navigate(
          `/your-location?lat=${userLocation.lat}&lng=${userLocation.lng}`
        );
      });
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAP_API_KEY, // Replace with your actual API key
    libraries: libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading...";

  return (
    <div className="bg-white w-full rounded-xl h-12 flex flex-col items-stretch px-4 shadow-xl">
      <div className="bg-white w-full h-12 flex items-center px-4">
        <FaSearch className="text-primary text-xl" />
        <Autocomplete
          className="w-full"
          onLoad={ref => inputRef.current = ref}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            placeholder="Type to Search..."
            className="bg-transparent border-none text-xl h-full w-full ml-2.5 focus:outline-none"
          />
        </Autocomplete>
        <TbCurrentLocation onClick={getUserLocation} className="text-primary text-2xl" />
      </div>
    </div>
  );
}

export default AutocompleteSearch;
