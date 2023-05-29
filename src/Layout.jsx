import { Outlet } from "react-router-dom";
import Sidebar from "./components/DashboardSidebar";

function Layout(){
    return (
      <div className="w-screen h-screen">
        <div className="h-5/6 w-11/12 p-4 flex gap-6">
            <Sidebar />
            <Outlet />
        </div>
      </div>
    );
}

export default Layout;