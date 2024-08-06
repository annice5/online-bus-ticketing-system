import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/home/index.jsx";
import AdminDashboard from "./pages/adminDashboard.jsx";
import UserPage from "./pages/userPage.jsx";









const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>
        
      },
      {
        path: "/admin",
        element: <AdminDashboard/>
      },

      {
        path: "/user",
        element: <UserPage/> 
      },

     
      {
        path:"/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>
      }
 
]); 
  

 function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
