import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import DetectLocation from "./pages/DetectLocationPage";
import Map from "./components/Map";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
      <Route exact path="/find-restaurants" element={<DetectLocation />}></Route>
      <Route path="/your-location" element={<Map />}></Route>
    </Routes>
  );
}

export default App;
