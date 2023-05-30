import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import DetectLocation from "./pages/DetectLocationPage";
import RestaurantPage from "./pages/RestaurantPage";
import AddRestaurant from "./pages/AddRestaurantForm";
import NearByRestaurants from "./pages/NearByRestaurants";
import RestaurantDashBoard from "./pages/RestaurantDashboard";
import RestaurantInventory from "./pages/RestaurantInventory";
import Layout from "./Layout";
import Requests from "./pages/FoodRequests";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
      <Route
        exact
        path="/find-restaurants"
        element={<DetectLocation />}
      ></Route>
      <Route path="/your-location" element={<NearByRestaurants />}></Route>
      <Route path="/restaurant" element={<RestaurantPage />}></Route>
      <Route path="/add-restaurants" element={<AddRestaurant />}></Route>
      <Route path="/restaurant-dashboard/*" element={<Layout />}>
        <Route index element={<RestaurantDashBoard />}></Route>
        <Route path="inventory" element={<RestaurantInventory />}></Route>
        <Route path="requests" element={<Requests />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
