import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import RegisterCard from "./components/header/RegisterCard";
import LoginCard from "./components/header/LoginCard";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
    </Routes>
  );
}

export default App
