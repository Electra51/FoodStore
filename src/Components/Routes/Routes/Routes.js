import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";


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
        path: '/blogs',
        element:<Blogs></Blogs>
        }
      
      ]
    },
  ]);