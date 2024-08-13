
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
      navigate("/login");
    } catch (error) {
      toast.error("An error occured");
    }

};


  return (
  

  
    <div className="h-screen  w-60 shadow flex flex-col px-5 py-8 bg-[#04071F]  ">
    <span className="text-2xl font-bold text-white text-center">
      Dashboard
    </span>
    <div className="flex flex-col gap-y-2 mt-5">
      {K.NAVLINKS.map(({ icon, text, link }, index) => (
        <NavLink
          to={link}
          key={index}
          className={({ isActive }) =>
            `flex gap-x-4 items-center     hover:rounded-md p-2 ${
              isActive ? " text-red-600 font-semibold" : ""
            }`
          }
          end
        >
          <span className="size-3 text-white p-2 ">{icon}</span>
          <span className="mt-5 ml-2 font-semibold text-red-600">{text}</span>
        </NavLink>
      ))}
    </div>
    <button
      className="flex gap-x-4 items-center mt-40 bg-white rounded-md  "
      onClick={logout}
    >
      <span className=" text-[#04071F] p-2 rounded-full ">
        <LogOut />
      </span>
      <span>Logout</span>
    </button>
  </div>

    
    
    
    

  )
}

export default Sidebar