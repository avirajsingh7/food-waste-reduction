import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import DetectLocation from "./pages/DetectLocationPage";
import RestaurantPage from "./pages/RestaurantPage";
import AddRestaurant from "./pages/AddRestaurantForm";
import NearByRestaurants from "./pages/NearByRestaurants";

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
    </Routes>
  );
}

export default App;
