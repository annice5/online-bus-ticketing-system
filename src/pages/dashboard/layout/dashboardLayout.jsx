import { Link, Navigate, Outlet } from "react-router-dom";

import { SquareMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { getDetails } from "../../../services/config";
import Sidebar from "../../../components/sidebar";

const DashboardLayout = () => {
  const [user, setUser] = useState();

  const { token, firstName, lastName, userName } = getDetails();

  useEffect(() => {
    if (token) {
      setUser({
        firstName,
        lastName,
        userName,
      });
    }
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const getAvatar = () => {
    if (!user) return "N/A";
    const initials = `${firstName[0]}${lastName[0]}`;
    return initials.toUpperCase();
  };

  return (
    <div className="flex h-screen bg-white ">
      <Sidebar />
      <div className=" w-full  overflow-y-auto">
        <div className="flex px-16 bg-gray-200 py-5 shadow-lg items-center">
          <span className="text-xl font-semibold text-primary ml-auto bg-white rounded-full shadow-md p-3">
            {getAvatar()}
          </span>
        </div>
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
};

export default DashboardLayout;
