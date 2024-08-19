import { TicketIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";




const UserNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50 p-4">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl  font-bold  text-[#04071F] flex">
            {" "}
            Ticketty <TicketIcon className=" size-5 text-[#B91C1C] mt-1 "/>{" "}
          </div>


          <div className="flex gap-4">
            <Link to="/logout">
              <button className="bg-[#04071F] text-white px-4 py-2 rounded  ">
                Logout
              </button>
            </Link>


          </div>
        </div>
      </nav>
  )
}


export default UserNavbar
