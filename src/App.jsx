import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/index.jsx";
import About from "./pages/about/index.jsx";
import Profile from "./pages/profile/index.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Routes from "./pages/routes/index.jsx";







const router = createBrowserRouter([

    {
        path: "/",
        element: <Landing/> 
        
      },

      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/routes",
        element:<Routes/>
      },
      {
        path: "/profile",
        element: <Profile/>
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
