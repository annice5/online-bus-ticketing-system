import { Link } from "react-router-dom"

const BusCard = ({bus}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
    <h3 className="text-xl font-bold mb-2">{bus.busName}</h3>
    <p>Departure: {bus.departure}</p>
    <p>Destination: {bus.destination}</p>
    <p>Departure Time: {bus.departureTime}</p>
    <p>Arrival Time: {bus.arrivalTime}</p>
    <p>Price: {bus.price}</p>
    <Link
      to={`/bus/${bus.id}`}
      className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block hover:bg-blue-700"
    >
      View Details
    </Link>
  </div>
  )
}

export default BusCard