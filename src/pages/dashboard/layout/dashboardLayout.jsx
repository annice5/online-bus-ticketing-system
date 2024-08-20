import { Link, Navigate, Outlet } from "react-router-dom";
import { SquareMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { getDetails } from "../../../services/config";
import Sidebar from "../../../components/sidebar";

const DashboardLayout = () => {
  const [user, setUser] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { token, firstName, lastName, userName } = getDetails();
 

  useEffect(() => {
    if (token) {
      setUser({
        firstName,
        lastName,
        userName,
      });
    }
  }, [token, firstName, lastName, userName]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const getAvatar = () => {
    if (!user) return "N/A";
    const initials = `${firstName[0]}${lastName[0]}`;
    return initials.toUpperCase();
  };

  return (
    <div className="flex flex-col md:flex-row bg-background min-h-screen">
      <div className="md:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-4 focus:outline-none text-primary"
        >
          <SquareMenu className="h-6 w-6" />
        </button>
      </div>
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between px-4 md:px-16 bg-primary text-white py-5 shadow-lg">
          <Link
            to="/dashboard/userprofile"
            className="ml-auto p-2 md:p-4 rounded-full cursor-pointer"
          >
            <span className="text-lg md:text-xl font-semibold text-background bg-accent rounded-full shadow-md p-2 md:p-3">
              {getAvatar()}
            </span>
          </Link>
        </div>
        <div className="p-4 md:p-8">
          <Outlet context={[user, setUser]} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
