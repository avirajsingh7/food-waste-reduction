import request from "../assets/icons/request.png";
import logout from "../assets/icons/logout.png";
import support from "../assets/icons/headphones.png";
import setting from "../assets/icons/settings.png";
import inventory from "../assets/icons/inventory.png";
import dashboard from "../assets/icons/dashboard.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const options = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: dashboard,
    route: "/restaurant-dashboard",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: inventory,
    route: "/restaurant-dashboard/inventory",
  },
  {
    id: "requests",
    label: "Requests",
    icon: request,
    route: "/restaurant-dashboard/requests",
  },
  {
    id: "support",
    label: "Support",
    icon: support,
    route: "/restaurant-dashboard/support",
  },
  {
    id: "logout",
    label: "Logout",
    icon: logout,
    route: "/restaurant-dashboard/logout",
  },
];

function Sidebar() {

    const location = useLocation();

    const [activeTab, setActiveTab] = useState("");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };


    useEffect(() => {
        const currentPath = location.pathname;
        console.log(currentPath);

      // Find the option whose route matches the current path
      const matchedOption = options.find(
        (option) => option.route === currentPath
      );

      if (matchedOption) {
        setActiveTab(matchedOption.id);
      }
      else if (currentPath === "/restaurant-dashboard/settings") {
          setActiveTab("settings");
      }
      else {
        setActiveTab(""); // Reset active tab if there is no match
      }
    }, [location]);

  return (
    <div className="h-full w-80 bg-primary rounded-xl text-dashboardOption">
      <div className=" w-2/3 h-5/6 m-auto mt-20 flex flex-col justify-between">
        <div className="flex flex-col gap-10 ">
          {options.map((option) => (
            <Link
              key={option.id}
              to={option.route}
              onClick={() => handleTabClick(option.id)}
              className={`flex gap-3 items-center ${
                activeTab === option.id ? "text-white text-xl" : ""
              }`}
            >
              <img className="h-8 w-8" src={option.icon} alt={option.label} />
              <h2>{option.label}</h2>
            </Link>
          ))}
        </div>
        <div>
          <Link
            to="/restaurant-dashboard/settings"
            onClick={() => handleTabClick("settings")}
            className={`flex gap-3 items-center ${
              activeTab === "settings" ? "text-white text-xl" : ""
            }`}
          >
            <img className="h-8 w-8" src={setting} alt="Settings" />
            <h2>Settings</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
