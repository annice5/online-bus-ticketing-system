import { Link } from "react-router-dom";

const RoutesTable = () => {

    const routes = [
        { from: 'Accra', to: 'Wenchi', type: 'Scheduled', scheduleDay: 'Monday', scheduleTime: '08:30 pm', price: '₵ 180.00' },
        { from: 'Accra', to: 'Sampa', type: 'Scheduled', scheduleDay: 'Monday', scheduleTime: '07:00 pm', price: '₵ 190.00' },
        { from: 'Yendi', to: 'Accra', type: 'Scheduled', scheduleDay: 'Monday', scheduleTime: '03:00 pm', price: '₵ 315.00' },
        { from: 'Bawku', to: 'Accra', type: 'Scheduled', scheduleDay: 'Monday', scheduleTime: '12:00 pm', price: '₵ 360.00' },
        { from: 'Bolga', to: 'Accra', type: 'Scheduled', scheduleDay: 'Monday', scheduleTime: '10:00 am', price: '₵ 410.00' },
        { from: 'Tamale', to: 'Accra', type: 'Scheduled', scheduleDay: 'Monday', scheduleTime: '7:00 am', price: '₵ 300.00' },
      ];

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300 rounded-3xl shadow-lg pb-10">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left p-4 border-r border-b border-gray-300">Traveling From</th>
          <th className="text-left p-4 border-r border-b border-gray-300">Traveling To</th>
          <th className="text-left p-4 border-r border-b border-gray-300">Trip Type</th>
          <th className="text-left p-4 border-r border-b border-gray-300">Schedule</th>
          <th className="text-left p-4 border-r border-b border-gray-300">Price</th>
          <th className="text-left p-4 border-b border-gray-300">Action</th>
        </tr>
      </thead>
      <tbody>
        {routes.map((route, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="p-4 border-r border-b border-gray-300">{route.from}</td>
            <td className="p-4 border-r border-b border-gray-300">{route.to}</td>
            <td className="p-4 border-r border-b border-gray-300">{route.type}</td>
            <td className="p-4 border-r border-b border-gray-300">
              <div className="text-gray-600">{route.scheduleDay}</div>
              <div className="text-blue-600">{route.scheduleTime}</div>
            </td>
            <td className="p-4 border-r border-b border-gray-300">{route.price}</td>
            <td className="p-4 border-b border-gray-300">
              <Link to = "/bookingpage">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Book Ticket
              </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default RoutesTable