import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  apiGetBus,
  apiAddBus,
  apiUpdateBus,
  apiDeleteBus,
} from "../../services/buses";

const Buses = () => {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("User is not authorized");
      navigate("/login");
    } else {
      fetchBuses();
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    busOperator: "",
    busLogo: "",
    busType: "Sprinter",
    capacity: "",
    busNumber: "",
    date: "",
    departureCity: "",
    arrivalCity: "",
    departureTime: "",
    arrivalTime: "",
    ticketPrice: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchBuses = async () => {
    try {
      const id = localStorage.getItem("userId");
      const token = localStorage.getItem("accessToken");
      const response = await apiGetBus(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setBuses(response.data);
    } catch (error) {
      console.error("Error fetching buses:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateBus = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!isEditing) {
        await apiAddBus(formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await apiUpdateBus(formData.id, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsEditing(false);
      }
      fetchBuses();
      setFormData({
        busOperator: "",
        busLogo: "",
        busType: "Sprinter",
        capacity: "",
        busNumber: "",
        date: "",
        departureCity: "",
        arrivalCity: "",
        departureTime: "",
        arrivalTime: "",
        ticketPrice: "",
      });
    } catch (error) {
      console.error("Error saving bus:", error);
    }
  };

  const handleEditBus = (bus) => {
    setFormData(bus);
    setIsEditing(true);
  };

  const handleDeleteBus = async (id) => {
    try {
      await apiDeleteBus(id);
      fetchBuses();
    } catch (error) {
      console.error("Error deleting bus:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 mt-7">Buses List</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-left">
                Bus Operator
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Bus Type
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Capacity
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Bus Number
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Departure City
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Arrival City
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Departure Time
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Arrival Time
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Ticket Price
              </th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border border-gray-300 text-left flex items-center space-x-2">
                  <img
                    src={`https://savefiles.org/${bus.busLogo}?shareable_link=341`}
                    alt="Bus Logo"
                    className="w-11 h-11 rounded-full"
                  />
                  <a href={`/dashboard/bookings/${bus.id}`}><span>{bus.busOperator}</span></a>
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.busType}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.capacity}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.busNumber}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.departureCity}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.arrivalCity}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.departureTime}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.arrivalTime}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {bus.ticketPrice}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleEditBus(bus)}
                      className="bg-[#04071F] text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBus(bus.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          {isEditing ? "Edit Bus" : "Add New Bus"}
        </h3>
        <form className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="busOperator"
            value={formData.busOperator}
            onChange={handleInputChange}
            placeholder="Bus Operator"
            className="border border-gray-300 rounded p-2"
            required
          />
          <select
            name="busType"
            value={formData.busType}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="Sprinter">Sprinter</option>
            <option value="Long bus">Long bus</option>
          </select>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            placeholder="Capacity"
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            name="busNumber"
            value={formData.busNumber}
            onChange={handleInputChange}
            placeholder="Bus Number"
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleInputChange}
            placeholder="Departure City"
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleInputChange}
            placeholder="Arrival City"
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="time"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="time"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleInputChange}
            placeholder="Ticket Price"
            className="border border-gray-300 rounded p-2"
            required
          />
        </form>
        <div className="mt-4">
          <button
            onClick={handleAddOrUpdateBus}
            className="bg-[#04071F] text-white px-4 py-2 rounded"
          >
            {isEditing ? "Update Bus" : "Add Bus"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buses;
