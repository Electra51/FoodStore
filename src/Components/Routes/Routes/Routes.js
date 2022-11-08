import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Servicess from "../../Pages/Servicess/Servicess";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
      path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element:<Home></Home>
      },
      {
        path: '/services',
        element: <Servicess></Servicess>,
        loader: async () => {
          return fetch('http://localhost:5000/services')
        }
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
        }
      
      ]
    },
  ]);