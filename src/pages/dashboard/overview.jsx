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
        try {
          const response = await apiGetBooking();
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
    <div className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
      <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[#e1f4f2] shadow-xl rounded-lg p-6 md:p-8">
          <div className="flex flex-col items-center">
            <h3 className="text-base md:text-lg font-medium text-[#043b5d]">Total Buses</h3>
            <p className="text-2xl md:text-3xl font-semibold text-[#438e87] mt-2">{totalBuses}</p>
          </div>
        </div>
        <div className="bg-[#e1f4f2] shadow-xl rounded-lg p-6 md:p-8">
          <div className="flex flex-col items-center">
            <h3 className="text-base md:text-lg font-medium text-[#043b5d]">Total Bookings</h3>
            <p className="text-2xl md:text-3xl font-semibold text-[#438e87] mt-2">{totalBookings}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 mt-8 md:mt-12 lg:grid-cols-3 lg:gap-8">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
          <h3 className="text-xs md:text-sm font-medium mb-4 text-[#043b5d]">
            Total Buses Active for 2023
          </h3>
          <div className="flex-grow">
            <ActiveBuses2023 />
            {/* Add Chart Component here */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 col-span-2 lg:col-span-2 flex flex-col">
          <h3 className="text-xs md:text-sm font-medium mb-4 text-[#043b5d]">
            Total Buses Active for 2024
          </h3>
          <div className="flex-grow">
            <ActiveBuses2024 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
