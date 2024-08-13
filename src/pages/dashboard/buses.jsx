
import  { useState } from "react";
const Buses = () => {

  const [buses, setBuses] = useState([
    { id: 1, name: "VIP Bus 1", route: "Accra - Kumasi", driver: "John Doe", status: "Active" },
    { id: 2, name: "VIP Bus 2", route: "Accra - Takoradi", driver: "Jane Smith", status: "Inactive" },
    { id: 3, name: "VIP Bus 3", route: "Kumasi - Tamale", driver: "Mike Johnson", status: "Active" },
    { id: 4, name: "VIP Bus 4", route: "Accra - Cape Coast", driver: "Sarah Brown", status: "Maintenance" },
  ]);

  const [formData, setFormData] = useState({ id: "", name: "", route: "", driver: "", status: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBus = () => {
    if (!isEditing) {
      setBuses([...buses, { ...formData, id: buses.length + 1 }]);
      setFormData({ id: "", name: "", route: "", driver: "", status: "" });
    } else {
      setBuses(buses.map(bus => bus.id === formData.id ? formData : bus));
      setIsEditing(false);
      setFormData({ id: "", name: "", route: "", driver: "", status: "" });
    }
  };

  const handleEditBus = (bus) => {
    setFormData(bus);
    setIsEditing(true);
  };

  const handleDeleteBus = (id) => {
    setBuses(buses.filter(bus => bus.id !== id));
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Buses List</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-r border-gray-300">Bus ID</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Bus Name</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Route</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Driver</th>
              <th className="py-2 px-4 border-b border-r border-gray-300">Status</th>
              <th className="py-2 px-4 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">{bus.id}</td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">{bus.name}</td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">{bus.route}</td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">{bus.driver}</td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-sm ${
                      bus.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : bus.status === "Inactive"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {bus.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-700"
                    onClick={() => handleEditBus(bus)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDeleteBus(bus.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Bus" : "Add New Bus"}</h3>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Bus Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
          <input
            type="text"
            name="route"
            placeholder="Route"
            value={formData.route}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            name="driver"
            placeholder="Driver"
            value={formData.driver}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleAddBus}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {isEditing ? "Update Bus" : "Add Bus"}
        </button>
      </form>
    </div>
  )
}

export default Buses