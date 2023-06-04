import RestaurantLocationSearch from "./RestaurantLocationSearch";
import { useState } from "react";
import Location from "./Location";
import { Link } from "react-router-dom";
import {databases} from '../appwrite/appwriteConfig';
import { Data } from "@react-google-maps/api";
import { v4 as uuidv4 } from 'uuid';
import {account} from '../appwrite/appwriteConfig';

function RestaurantDetails() {


  const [restaurant,setRestaurant] = useState({
    rName:"",
    rAdress:"",
    rphone:9999999999,
    lat: -73.97599050000001,
    long: -73.97599050000001,
    country: "",
    state: "",
    locality: "",
    postalCode: "",
    oName:"",
    oEmail:"",
    oPhone:9999999999,
    userID:""
  })

  // const [restaurantLocation, setRestaurantLocation] = useState({
  //   lat: -73.97599050000001,
  //   long: -73.97599050000001,
  //   country: "",
  //   state: "",
  //   locality: "",
  //   postalCode: ""
  // });

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const uid = uuidv4()

    const promise = databases.createDocument(import.meta.env.VITE_REACT_APP_APPWRITE_DATABASE_ID,
                      import.meta.env.VITE_REACT_APP_APPWRITE_COLLECTION_ID,
                      uid,{
      rName:restaurant.rName,
      rAdress:restaurant.rAdress,
      rPhone:restaurant.rphone,
      lat:restaurant.lat,
      long:restaurant.long,
      oName:restaurant.oName,
      oEmail:restaurant.oEmail,
      oPhone:restaurant.oPhone,
      userID:restaurant.userID
    })
    promise.then(
      function(response){
        console.log(response)
      },
      function(error){
        console.log(error)
      }
    )
  }




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
              onChange={(e)=>{
                setRestaurant({
                  ...restaurant,
                  rName:e.target.value
                })
              }}
            />
            <input
              className="border rounded-lg w-full p-2"
              type="text"
              name="restaurantAddress"
              id=""
              placeholder="Restaurant Complete address"
              onChange={(e)=>{
                setRestaurant({
                  ...restaurant,
                  rAdress:e.target.value
                })
              }}
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
                setRestaurant={setRestaurant}
                restaurant={restaurant}
                
              />
              <div className="w-full h-80 rounded-xl border mt-3">
                <Location
                  latitude={restaurant.lat}
                  longitude={restaurant.long}
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
                  placeholder={restaurant.country}
                />
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="pincode"
                  id=""
                  placeholder={restaurant.postalCode}
                />
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="City"
                  id=""
                  placeholder={restaurant.locality}
                />
                <input
                  className="border rounded-lg p-2 w-5/12"
                  type="text"
                  name="State"
                  id=""
                  placeholder={restaurant.state}
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
              onChange={(e)=>{
                setRestaurant({
                  ...restaurant,
                  rphone:e.target.value
                })
              }}
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
            onChange={(e)=>{
              setRestaurant({
                ...restaurant,
                oName:e.target.value
              })
            }}
          />
          <input
            className="p-2 w-5/12 border rounded-lg"
            type="text"
            placeholder="Restaurant owner email address"
            onChange={(e)=>{
              setRestaurant({
                ...restaurant,
                oEmail:e.target.value
              })
            }}
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
              onChange={(e)=>{
                setRestaurant({
                  ...restaurant,
                  oPhone:e.target.value
                })
              }}
            />
          </div>
          <button className="border rounded-lg w-1/3 bg-gray-200">
            Verify
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
          <button className="bg-primary text-sm w-32 h-10 rounded-lg text-white" onClick={handleSubmit}>
            Submit
          </button>
      </div>
    </div>
  );
}
export default RestaurantDetails;
