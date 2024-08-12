import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index.jsx";
import AdminDashboard from "./pages/dashboard/adminDashboard.jsx";
import SignupPage from "./pages/signupPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import Overview from "./pages/dashboard/overview.jsx";
import UserPage from "./pages/userPage.jsx";
import BookingPage from "./pages/bookingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },

  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/userpage",
    element: <UserPage />,
  },
  {
    path: "/bookingpage",
    element: <BookingPage/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
