import { Link, Navigate, Outlet } from "react-router-dom";

import { SquareMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { getDetails } from "../../../services/config";
import Sidebar from "../../../components/sidebar";

const DashboardLayout = () => {
  const [user, setUser]  = useState();

//   const { token, firstName, lastName, userName } = getDetails();

 

//   useEffect(() => {
//     if (token) {
//       setUser({
//         firstName,
//         lastName,
//         userName,
//       });
//     }
//   }, []);

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   const getAvatar = () => {
//     if (!user) return "N/A";
//     const initials = `${firstName[0]}${lastName[0]}`;
//     return initials.toUpperCase();
//   };

  return (
    <div className="flex bg-white ">
      <Sidebar/>
      <div className=" w-full">
        <div className="flex px-16 bg-gray-200 py-5 shadow-lg items-center">
          <span className="p-3  text-black rounded-full shadow-md bg-white ">
            <SquareMenu className="size-8" />
          </span>
          <Link
            to="/dashboard/userprofile"
            className="ml-auto  p-4 rounded-full cursor-pointer"
          >
            {/* <span className="text-xl font-semibold text-black rounded-full shadow-md p-3">
              {getAvatar()}
            </span> */}
          </Link>
        </div>
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
};

export default DashboardLayout;