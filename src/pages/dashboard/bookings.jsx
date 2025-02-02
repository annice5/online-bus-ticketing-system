import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiGetBooking, apiGetBookings } from '../../services/bookings';
import { useParams } from 'react-router-dom';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();


  useEffect(() => {
    const checkAuthorization = () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("User is not authorized");
        navigate("/login"); // Redirect to login page if not authorized
      }
      return token;
    };

    const fetchBookings = async () => {
      const token = checkAuthorization();
      if (token) {
        console.log("token", token);
        try {
          const response = await apiGetBookings(params.id);
          console.log("response", response.data);
          setBookings(response.data); // Assuming the endpoint returns a list of bookings
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    };

    fetchBookings();
  }, []);

  console.log("Booking", bookings);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-10">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              {/* <th className="py-3 px-4 font-semibold text-gray-600 border-r">Passenger Name</th> */}
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Passenger Name</th>
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Email</th>
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Seat Number</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-t">
                  <td className="py-3 px-4 border-r">{`${booking.user.firstName}-${booking.user.lastName}`}</td>
                  <td className="py-3 px-4 border-r">{booking.user.email}</td>
                  <td className="py-3 px-4 border-r">{booking.seats[0]}</td>
                  
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-white ${
                        /* Add status logic here if necessary */
                        booking.seats.length > 0 ? 'bg-green-500' : 'bg-gray-500'
                      }`}
                    >
                      {booking.seats.length > 0 ? 'Confirmed' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-3 px-4 text-center">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
