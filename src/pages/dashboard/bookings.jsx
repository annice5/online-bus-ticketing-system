import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://ticketting.netlify.app/api/operator/buses/bookings'); // Adjust the URL as needed
        setBookings(response.data);
      } catch (err) {
        setError('Failed to fetch bookings');
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-10">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Passenger Name</th>
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Route</th>
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Departure Time</th>
              <th className="py-3 px-4 font-semibold text-gray-600 border-r">Seat Number</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-t">
                  <td className="py-3 px-4 border-r">{booking.user}</td>
                  <td className="py-3 px-4 border-r">{/* You might need to fetch route details if not available */}</td>
                  <td className="py-3 px-4 border-r">{/* You might need to fetch departure time if not available */}</td>
                  <td className="py-3 px-4 border-r">{booking.seats.join(', ')}</td>
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
