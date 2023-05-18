import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Componant/Home/Home";
import Login from "../Componant/Login/Login";
import Register from "../Componant/Register/Register";
import Addtoys from "../Componant/AddToy/Addtoys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,

        },
        {
          path:'/login',
          element:<Login/>
      },
        {
          path:'/reg',
          element:<Register/>
      },
      {
        path:'/addtoy',
        element:<Addtoys></Addtoys>
      }
      ]
    },
  ]);

export default router;