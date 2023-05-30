import user from "../assets/images/user.jpeg";
import bell from "../assets/icons/bell.png";
import { FaSearch } from "react-icons/fa";
import RequestCard from "../components/FoodRequestCard";
function Requests() {
  return (
    <div className="flex w-full h-full flex-col gap-10">
      <div className="h-16 w-full border flex gap-6 items-center justify-between">
        <div className="flex ml-6 items-center gap-3">
          <FaSearch />
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center mr-6 gap-6">
          <img className="h-6 w-6" src={bell} alt="dashboard-icon" />
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={user} alt="user-img" />
            <h2>Tom Hook</h2>
          </div>
        </div>
      </div>
      <div className="h-5/6 w-full flex flex-col gap-16 border rounded-sm py-2 px-10">
        <div className="flex gap-10 flex-wrap h-full overflow-y-auto ">
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </div>
      </div>
    </div>
  );
}

export default Requests;
