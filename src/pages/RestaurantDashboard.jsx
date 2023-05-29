import juice from "../assets/images/juice.avif"
import dish from "../assets/images/food.avif"
import user from "../assets/images/user.jpeg"
import bell from "../assets/icons/bell.png"
import { FaSearch } from "react-icons/fa";

function Dashboard() {
    return (
          <div className="flex w-full h-full flex-col gap-16">
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
                <img className="rounded-lg h-6 w-6" src={bell} alt="dashboard-icon" />
                <div className="flex items-center gap-2">
                  <img className="w-10 h-10" src={user} alt="user-img" />
                  <h2>Tom Hook</h2>
                </div>
              </div>
            </div>
            <div className="h-5/6 w-full border rounded-sm py-2">
              <div className="flex flex-col h-full ml-6 overflow-y-auto gap-6">
                <div className="flex gap-4">
                  <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
                  <div className="w-2/3">
                    <h4 className="inline">Maecenas</h4>
                    <h4 className="inline float-right">03</h4>
                    <p className="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img className="rounded-lg h-32 w-36" src={dish} alt="juice-img" />
                  <div className="w-2/3">
                    <h4 className="inline">Maecenas</h4>
                    <h4 className="inline float-right">03</h4>
                    <p className="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
                  <div className="w-2/3">
                    <h4 className="inline">Maecenas</h4>
                    <h4 className="inline float-right">03</h4>
                    <p className="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img className="rounded-lg h-32 w-36" src={dish} alt="juice-img" />
                  <div className="w-2/3">
                    <h4 className="inline">Maecenas</h4>
                    <h4 className="inline float-right">03</h4>
                    <p className="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img className="rounded-lg h-32 w-36" src={juice} alt="juice-img" />
                  <div className="w-2/3">
                    <h4 className="inline">Maecenas</h4>
                    <h4 className="inline float-right">03</h4>
                    <p className="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}


export default Dashboard;