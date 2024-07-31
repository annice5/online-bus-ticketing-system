import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/index.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";




const router = createBrowserRouter([

    { path: "/", element: <Landing/>},
     {path: "signup", element: <Signup/>},
    {path: "login", element: <Login/>},
 
]); 
  

 function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
