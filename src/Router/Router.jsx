import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Componant/Home/Home";
import Login from "../Componant/Login/Login";
import Register from "../Componant/Register/Register";
import Addtoys from "../Componant/AddToy/Addtoys";
import Toys from "../Componant/MyToys/Toys";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Componant/UpdateToy/UpdateToy";
import ToysAll from "../Componant/AllToys/ToysAll";
import Adetalies from "../Componant/AllToys/Adetalies";
import BCDetail from "../Componant/Subcatrgory/BCDetail";


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
           path:'/alltoys',
           element:<ToysAll></ToysAll>
      },
      {
           path:'/detalies/:id',
           element:<PrivateRoute><Adetalies></Adetalies></PrivateRoute>,
           loader: ({params}) =>fetch(`https://edu-ler-toy-server-farjanaakterlaila.vercel.app/alltoy/${params.id}`)
      },
      {
           path:'/SubCdetail/:id',
           element:<PrivateRoute><BCDetail></BCDetail></PrivateRoute>,
           loader: (({params}) =>fetch(`https://edu-ler-toy-server-farjanaakterlaila.vercel.app/post-toy/${params.id}/${params.id}`))
      },
      {
        path:'/addtoy',
        element:<Addtoys></Addtoys>
      },
      {
path:"/myToy",
element:<PrivateRoute><Toys></Toys></PrivateRoute>
      },
      {
path:"/updatetoy/:id",
element:<UpdateToy></UpdateToy>,
loader:(({params})=>fetch(`https://edu-ler-toy-server-farjanaakterlaila.vercel.app/post-toy/${params.id}`))
      }
      ]
    },
  ]);

export default router;