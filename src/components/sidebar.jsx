import { LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import K from "../constants";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";

const Sidebar = () => {
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
    <div className="h-screen w-full sm:w-60 shadow flex flex-col px-2 sm:px-5 py-4 sm:py-8 bg-[#e1f4f2]">
      <span className="text-xl sm:text-2xl font-bold text-[#043b5d] text-center">
        Dashboard
      </span>
      <div className="flex flex-col gap-y-1 sm:gap-y-2 mt-6 sm:mt-11 flex-grow">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-2 sm:gap-x-4 items-center hover:rounded-md p-1 sm:p-2 ${
                isActive ? "text-[#438e87] font-semibold" : "text-[#043b5d]"
              }`
            }
            end
          >
            <span className="size-2 sm:size-3 text-[#043b5d] p-1 sm:p-2">{icon}</span>
            <span className="text-sm sm:text-base mt-3 sm:mt-5 ml-1 sm:ml-2 font-semibold text-[#438e87]">
              {text}
            </span>
          </NavLink>
        ))}
      </div>
      <button
        className="flex gap-x-2 sm:gap-x-4 items-center mt-auto bg-[#043b5d] rounded-md"
        onClick={logout}
      >
        <div className="bg-[#043b5d] flex text-sm sm:text-lg px-4 sm:px-8 py-1 rounded-lg w-full justify-center">
          <span className="text-white mr-2">
            <LogOut size={16} />
          </span>
          <span className="text-white">Logout</span>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
