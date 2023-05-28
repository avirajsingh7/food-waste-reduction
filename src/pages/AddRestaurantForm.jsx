import RestaurantDetails from "../components/RestaurantDetailsForm";

function AddRestaurant() {
    return (
      <div className="py-20">
        <div className="m-auto w-5/12">
          <h1 className="text-thin text-3xl">
            Restaurant Information
          </h1>
          <RestaurantDetails />
        </div>
      </div>
    );
}

export default AddRestaurant;