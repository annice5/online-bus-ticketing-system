

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      passengerName: 'John Doe',
      route: 'Accra - Kumasi',
      departureTime: '08:30 AM, 20 Aug 2024',
      seatNumber: '3',
      status: 'Confirmed',
    },
    {
      id: 2,
      passengerName: 'Jane Smith',
      route: 'Accra - Tamale',
      departureTime: '10:00 AM, 20 Aug 2024',
      seatNumber: '5',
      status: 'Pending',
    },
    {
      id: 3,
      passengerName: 'Mike Johnson',
      route: 'Accra - Takoradi',
      departureTime: '02:00 PM, 20 Aug 2024',
      seatNumber: '7',
      status: 'Cancelled',
    },
  ];
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
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t">
              <td className="py-3 px-4 border-r">{booking.passengerName}</td>
              <td className="py-3 px-4 border-r">{booking.route}</td>
              <td className="py-3 px-4 border-r">{booking.departureTime}</td>
              <td className="py-3 px-4 border-r">{booking.seatNumber}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-white ${
                    booking.status === 'Confirmed'
                      ? 'bg-green-500'
                      : booking.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};
  


export default Bookings