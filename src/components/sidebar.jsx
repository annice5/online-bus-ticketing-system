import { FaChartBar, FaCalendarAlt, FaUserAlt, FaWpforms, FaTable, FaCog, FaChartLine, FaBus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#34646E] text-white w-64 p-5">
    <div className="mb-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </div>
    <nav>
      <ul>
      <li className="mb-4">
          <a href="#" className="flex items-center p-2 hover:bg-[#C59637] rounded">
            <FaChartBar className="mr-3" /> Overview
          </a>
        </li>
       
       <li className="mb-4">
          <a href="#" className="flex items-center p-2 hover:bg-[#C59637] rounded">
            <FaUserAlt className="mr-3" /> Profile
          </a>
        </li>

        <li className="mb-4">
          <a href="#" className="flex items-center p-2 hover:bg-[#C59637] rounded">
            <FaBus className='mr-3'/> Buses
          </a>
        </li>

        <li className="mb-4">
          <a href="#" className="flex items-center p-2 hover:bg-[#C59637] rounded">
            <FaCalendarAlt className="mr-3" /> Bookings
          </a>
        </li>
       <li className="mb-4">
          <a href="#" className="flex items-center p-2 hover:bg-[#C59637] rounded">
            <FaCog className="mr-3" /> Settings
          </a>
        </li>
        
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar