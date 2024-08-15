// import ApexChart from "../../components/profitChart"

import ActiveBuses2023 from "../../components/activeBuses2023";
import ActiveBuses2024 from "../../components/activeBuses2024";

const Overview = () => {
  return (
    <div>
      <div className="flex-1 mt-14 ml-5 mr-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ml-28">
          <div className="bg-gray-100 shadow-xl rounded-lg px-10 py-14">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium">Total Buses</h3>
              <p className="text-3xl font-semibold text-green-500 mt-2">100</p>
            </div>
          </div>
          <div className="bg-gray-100 shadow-xl rounded-lg px-10 py-14">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium">Total Bookings</h3>
              <p className="text-3xl font-semibold text-green-500 mt-2">67</p>
            </div>
          </div>
          <div className="bg-gray-100 shadow-xl rounded-lg px-10 py-14">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium">Total Users</h3>
              <p className="text-3xl font-semibold text-green-500 mt-2">300</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-32">
          <div className="bg-white shadow-md rounded-lg p-4  flex flex-col">
            <h3 className="text-sm font-medium mb-4">
              Total Buses Active for 2023
            </h3>
            <div className="flex-grow">
              <ActiveBuses2023 />
              {/* Add Chart Component here */}
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 col-span-2 flex flex-col">
            <h3 className="text-sm font-medium mb-4">
              Total Buses Active for 2024
            </h3>
            <div className="flex-grow">
              <ActiveBuses2024 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
