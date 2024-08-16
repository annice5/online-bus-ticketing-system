import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index.jsx";

import SignupPage from "./pages/signupPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import Overview from "./pages/dashboard/overview.jsx";
import UserPage from "./pages/userPage.jsx";
import BookingPage from "./pages/bookingPage.jsx";
import DashboardLayout from "./pages/dashboard/layout/dashboardLayout.jsx";
import Bookings from "./pages/dashboard/bookings.jsx";
import Buses from "./pages/dashboard/buses.jsx";
import CheckoutSuccess from "./components/checkoutSuccess.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
          {
            index: true,
            element:<Overview /> ,
          },
          {
            path: "buses",
            element: <Buses/>,
          },
          {
            path: "bookings",
            element: <Bookings/>,
          },
        
    ]
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
    path: "/bookingpage/:busId",
    element: <BookingPage/>,
  },
  {
    path: "/checkout-success",
    element: <CheckoutSuccess />,
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
