import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGetBuses } from "../../services/buses";
import { apiGetBooking } from "../../services/bookings";
import ActiveBuses2023 from "../../components/activeBuses2023";
import ActiveBuses2024 from "../../components/activeBuses2024";

const Overview = () => {
  const [totalBuses, setTotalBuses] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check authorization
    const checkAuthorization = () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("User is not authorized");
        navigate("/login"); // Redirect to login page if not authorized
      }
      return token;
    };

    // Function to fetch total number of buses
    const fetchTotalBuses = async () => {
      const token = checkAuthorization();
      if (token) {
        try {
          const response = await apiGetBuses();
          setTotalBuses(response.data.length); // Assuming the endpoint returns a list of buses
        } catch (error) {
          console.error("Error fetching buses:", error);
        }
      }
    };

    // Function to fetch total number of bookings
    const fetchTotalBookings = async () => {
      const token = checkAuthorization();
      if (token) {
        console.log("token", token);
        try {
          const response = await apiGetBooking();
          console.log("response", response.data);
          setTotalBookings(response.data.length); // Assuming the endpoint returns a list of bookings
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    };

    fetchTotalBuses();
    fetchTotalBookings();
  }, [navigate]);

  return (
    <div>
      <div className="flex-1 mt-14 ml-5 mr-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ml-28">
          <div className="bg-gray-100 shadow-xl rounded-lg px-10 py-14">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium">Total Buses</h3>
              <p className="text-3xl font-semibold text-green-500 mt-2">{totalBuses}</p>
            </div>
          </div>
          <div className="bg-gray-100 shadow-xl rounded-lg px-10 py-14">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium">Total Bookings</h3>
              <p className="text-3xl font-semibold text-green-500 mt-2">{totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-32">
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
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
