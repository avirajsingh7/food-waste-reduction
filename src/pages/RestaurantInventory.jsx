import juice from "../assets/images/juice.avif";
import dish from "../assets/images/food.avif";
import user from "../assets/images/user.jpeg";
import bell from "../assets/icons/bell.png";
import { FaSearch } from "react-icons/fa";

function Inventory() {
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
        <div className="flex items-center mr-6 gap-10">
          <img className="h-6 w-6" src={bell} alt="dashboard-icon" />
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={user} alt="user-img" />
            <h2>Tom Hook</h2>
          </div>
        </div>
      </div>
      <div className="h-5/6 w-full flex flex-col gap-16 border rounded-sm py-2">
        <div className="flex items-center justify-center mt-4 ">
          <button className="bg-primary p-2 rounded-full h-12 w-44">
            Add Item
          </button>
        </div>
        <div className="flex flex-col h-5/6 ml-6 overflow-y-auto gap-6">
          <div className="flex gap-14">
            <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
            <div className="w-2/3">
              <h4 className="inline">Maecenas</h4>
              <h4 className="inline float-right">03</h4>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-6 items-center mt-6">
                <button className="bg-editButton rounded-full py-2 px-4 h-8 flex items-center">
                  Edit
                </button>
                <button className="bg-deleteButton rounded-full h-8 py-2 px-4 flex items-center ">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
            <div className="w-2/3">
              <h4 className="inline">Maecenas</h4>
              <h4 className="inline float-right">03</h4>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-6 items-center mt-6">
                <button className="bg-editButton rounded-full py-2 px-4 h-8 flex items-center">
                  Edit
                </button>
                <button className="bg-deleteButton rounded-full h-8 py-2 px-4 flex items-center ">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
            <div className="w-2/3">
              <h4 className="inline">Maecenas</h4>
              <h4 className="inline float-right">03</h4>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-6 items-center mt-6">
                <button className="bg-editButton rounded-full py-2 px-4 h-8 flex items-center">
                  Edit
                </button>
                <button className="bg-deleteButton rounded-full h-8 py-2 px-4 flex items-center ">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
            <div className="w-2/3">
              <h4 className="inline">Maecenas</h4>
              <h4 className="inline float-right">03</h4>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-6 items-center mt-6">
                <button className="bg-editButton rounded-full py-2 px-4 h-8 flex items-center">
                  Edit
                </button>
                <button className="bg-deleteButton rounded-full h-8 py-2 px-4 flex items-center ">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
            <div className="w-2/3">
              <h4 className="inline">Maecenas</h4>
              <h4 className="inline float-right">03</h4>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-6 items-center mt-6">
                <button className="bg-editButton rounded-full py-2 px-4 h-8 flex items-center">
                  Edit
                </button>
                <button className="bg-deleteButton rounded-full h-8 py-2 px-4 flex items-center ">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
