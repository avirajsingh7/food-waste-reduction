import RestaurantLocationSearch from "./RestaurantLocationSearch";
import { useState } from "react";
import Location from "./Location";

function RestaurantDetails() {
  const [restaurantLocation, setRestaurantLocation] = useState({
    lat: 40.6851868,
    lng: -73.97599050000001,
    country: "",
    state: "",
    locality: "",
    postalCode: ""
  });

  return (
    <div className="mt-10">
      <div className="border rounded-lg p-4">
        <h2 className="text-xl">Restaurant details</h2>
        <h3 className="text-thin text-sm">Name, address and location</h3>
        <div className="mt-10">
          <form className="flex flex-col gap-10" action="">
            <input
              className="border rounded-lg w-full p-2"
              type="text"
              name="restaurantName"
              id=""
              placeholder="Restaurant Name"
            />
            <input
              className="border rounded-lg w-full p-2"
              type="text"
              name="restaurantAddress"
              id=""
              placeholder="Restaurant Complete address"
            />
          </form>
          <p className="border-2 rounded-lg p-1 text-xs mt-3 text-textColor">
            Please ensure this is same as the address on your FSSAI document (if
            applicable)
          </p>
          <div className="mt-10">
            <h3 className="text-l">
              Please place the pin accurately at your outlet's location on the
              map
            </h3>
            <h5 className="text-sm">
              This will help users to locate your store
            </h5>
            <div className="mt-3">
              <RestaurantLocationSearch
                restaurantLocation={restaurantLocation}
                setRestaurantLocation={setRestaurantLocation}
              />
              <div className="w-full h-80 rounded-xl border mt-3">
                <Location
                  latitude={restaurantLocation.lat}
                  longitude={restaurantLocation.lng}
                />
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-l">Restaurant address details</h3>
              <h5 className="text-sm">
                Address details are basis the restaurant location mentioned
                above
              </h5>
              <div className="flex flex-wrap gap-4 w-full mt-4">
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="Country"
                  id=""
                  placeholder={restaurantLocation.country}
                />
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="pincode"
                  id=""
                  placeholder={restaurantLocation.postalCode}
                />
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="City"
                  id=""
                  placeholder={restaurantLocation.locality}
                />
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="State"
                  id=""
                  placeholder={restaurantLocation.state}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-4 mt-10">
        <h2 className="text-xl">Contact number at restaurant</h2>
        <h3 className="text-thin text-sm">
          Users will call on this number for general enquiries
        </h3>
        <div className="mt-4 flex gap-24">
          <div className="flex w-full gap-2 items-center border rounded-lg">
            <span>+91</span>
            <div className="border h-8"></div>
            <input
              className="p-2 w-full"
              type="text"
              placeholder="Mobile number at restaurant"
            />
          </div>
          <button className="border rounded-lg w-1/3 bg-gray-200">
            Verify
          </button>
        </div>
      </div>
      <div className="border rounded-lg p-4 mt-10 flex flex-col gap-4">
        <div>
          <h2 className="text-xl">Restaurant owner details</h2>
          <h3 className="text-thin text-sm">
            These will be used to share revenue related communications
          </h3>
        </div>
        <div className="flex gap-5">
          <input
            className="p-2 w-5/12 border rounded-lg"
            type="text"
            placeholder="Restaurant owner full name"
          />
          <input
            className="p-2 w-5/12 border rounded-lg"
            type="text"
            placeholder="Restaurant owner email address"
          />
        </div>
        <div className="mt-4 flex gap-24">
          <div className="flex w-full gap-2 items-center border rounded-lg">
            <span>+91</span>
            <div className="border h-8"></div>
            <input
              className="p-2 w-full"
              type="text"
              placeholder="Mobile number at restaurant"
            />
          </div>
          <button className="border rounded-lg w-1/3 bg-gray-200">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
export default RestaurantDetails;
