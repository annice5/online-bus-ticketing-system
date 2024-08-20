import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const RoutesTable = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get("https://ticket-api-vl7w.onrender.com/api/buses");
        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching the routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex justify-center items-center p-8">
        <div className="w-full max-w-screen-lg bg-white border border-gray-300 rounded-3xl shadow-lg overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-2 px-4 text-left">Bus Operator</th>
                <th className="py-2 px-4 text-left">Departure City</th>
                <th className="py-2 px-4 text-left">Arrival City</th>
                <th className="py-2 px-4 text-left">Bus Type</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Ticket Price</th>
                <th className="py-2 px-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="py-2 px-4 flex gap-2 items-center">
                    <img
                      src={`https://savefiles.org/${route.busLogo}?shareable_link=341`}
                      alt="Bus Logo"
                      className="w-6 h-6 rounded-full border border-primary"
                    />
                    <span>{route.busOperator}</span>
                  </td>
                  <td className="py-2 px-4 text-secondary">{route.departureCity}</td>
                  <td className="py-2 px-4 text-secondary">{route.arrivalCity}</td>
                  <td className="py-2 px-4 text-secondary">{route.busType}</td>
                  <td className="py-2 px-4 text-secondary">{formatDate(route.date)}</td>
                  <td className="py-2 px-4 text-secondary">{route.ticketPrice}</td>
                  <td className="py-2 px-4">
                    <Link to={`/bookingpage/${route.id}`}>
                      <button className="bg-complementary text-white px-4 py-2 rounded hover:bg-accent transition">
                        Book Ticket
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoutesTable;
