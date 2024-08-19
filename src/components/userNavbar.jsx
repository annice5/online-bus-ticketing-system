import { TicketIcon } from "@heroicons/react/24/solid";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UserNavbar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50 p-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl  font-bold  text-[#04071F] flex">
          {" "}
          Ticketty <TicketIcon className=" size-5 text-complementary mt-1 " />{" "}
        </div>

        <button
          className="flex gap-x-4 items-center mt-auto bg-white rounded-md"
          onClick={logout}
        >
          <div className="bg-primary flex text-lg px-4 py-2 rounded-lg">
           <span className="text-white">Logout</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
