
import { Link, } from "react-router-dom"
const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/admin/buses" className="hover:underline">Manage Buses</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/bookings" className="hover:underline">Manage Bookings</Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/users" className="hover:underline">Manage Users</Link>
          </li>
        </ul>
      </nav>
    </aside>
  
  </div>
  )
}

export default AdminDashboard