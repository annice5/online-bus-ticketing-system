import { useState, useEffect } from "react";
import axios from "axios";

const Buses = () => {
  // State for holding the list of buses
  
  const [buses, setBuses] = useState([]);

  // Check if the user is authorized
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("User is not authorized");
      navigate("/login");
    } else {
      fetchBuses(); // Only fetch buses if authorized
    }
  }, []);

  // State for handling form data
  const [formData, setFormData] = useState({
    id: "",
    busOperator: "",
    busType: "Sprinter",
    capacity: "",
    busNumber: "",
    date: "",
    departureCity: "",
    arrivalCity: "",
    departureTime: "",
    arrivalTime: "",
    ticketPrice: "",
    discount: "10%",
  });

  // State for managing whether we are in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Fetch all buses from the backend when the component mounts
  useEffect(() => {
    fetchBuses();
  }, []);

  // Function to fetch buses from the backend
  const fetchBuses = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("https://ticket-api-vl7w.onrender.com/operator/buses", {
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

  // Handle input change for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to add or update a bus
  const handleAddOrUpdateBus = async () => {
    if (!isEditing) {
      try {
        await axios.post("https://ticket-api-vl7w.onrender.com/operator/buses", formData);
        fetchBuses(); // Refresh the list
        setFormData({
          id: "",
          busOperator: "",
          busType: "Sprinter",
          capacity: "",
          busNumber: "",
          date: "",
          departureCity: "",
          arrivalCity: "",
          departureTime: "",
          arrivalTime: "",
          ticketPrice: "",
          discount: "10%",
        });
      } catch (error) {
        console.error("Error adding bus:", error);
      }
    } else {
      try {
        await axios.patch(`https://ticket-api-vl7w.onrender.com/operator/buses/${formData.id}`, formData);
        fetchBuses(); // Refresh the list
        setIsEditing(false);
        setFormData({
          id: "",
          busOperator: "",
          busType: "Sprinter",
          capacity: "",
          busNumber: "",
          date: "",
          departureCity: "",
          arrivalCity: "",
          departureTime: "",
          arrivalTime: "",
          ticketPrice: "",
          discount: "10%",
        });
      } catch (error) {
        console.error("Error updating bus:", error);
      }
    }
  };

  // Function to handle editing a bus
  const handleEditBus = (bus) => {
    setFormData(bus);
    setIsEditing(true);
  };

  // Function to handle deleting a bus
  const handleDeleteBus = async (id) => {
    try {
      await axios.delete(`https://ticket-api-vl7w.onrender.com/operator/buses/${id}`);
      fetchBuses(); // Refresh the list
    } catch (error) {
      console.error("Error deleting bus:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Buses List</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Bus Operator</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Bus Type</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Capacity</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Bus Number</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Departure City</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Arrival City</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Departure Time</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Arrival Time</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Ticket Price</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Discount</th>
              <th className="py-2 px-4 border border-gray-300 bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.busOperator}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.busType}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.capacity}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.busNumber}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.departureCity}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.arrivalCity}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.departureTime}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.arrivalTime}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.ticketPrice}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">{bus.discount}</td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  <button onClick={() => handleEditBus(bus)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteBus(bus.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Bus" : "Add New Bus"}</h3>
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
          />
          <select
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="10%">10%</option>
            <option value="20%">20%</option>
          </select>
        </form>
        <button onClick={handleAddOrUpdateBus} className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600">
          {isEditing ? "Update Bus" : "Add Bus"}
        </button>
      </div>
    </div>
  );
};

export default Buses;
