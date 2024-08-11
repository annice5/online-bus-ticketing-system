import Header from "../components/header"
import Sidebar from "../components/sidebar"

const AdminDashboard = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1 p-10 text-gray-700">
      <Header/>
    </div>
  </div>
  )
}

export default AdminDashboard