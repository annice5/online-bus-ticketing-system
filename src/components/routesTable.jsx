import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const RoutesTable = () => {
  const [routes, setRoutes] = useState([]);


  console.log(routes);


  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        
        const response = await axios.get(" https://ticket-api-vl7w.onrender.com/api/buses");
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
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-3xl shadow-lg pb-10">
        <thead>
          <tr className="bg-gray-100">
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
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{route.busOperator}</td>
              <td className="py-2 px-4">{route.departureCity}</td>
              <td className="py-2 px-4">{route.arrivalCity}</td>
              <td className="py-2 px-4">{route.busType}</td>
              <td className="py-2 px-4">{formatDate(route.date)}</td>
              <td className="py-2 px-4">{route.ticketPrice}</td>
              <td className="py-2 px-4">
                <Link to={`/bookingpage/${route.id}`}>
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
  );
};


export default RoutesTable;

