// import Main from "../../Layouts/Main";
// import Blogs from "../../Pages/Blogs/Blogs";
// import CommentForm from "../../Pages/CommentForm/CommentForm";
// import Home from "../../Pages/Home/Home";
// import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
// import Servicess from "../../Pages/Servicess/Servicess";
// import Login from "../../Shared/Login";
// import SignUp from "../../Shared/SignUp";

import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Servicess from "../../Pages/Servicess/Servicess";
import CommentForm from "../../../src/Pages/CommentForm/CommentForm"
import SignUp from "../../Shared/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Shared/Login"

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
      path:'/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element:<Home></Home>
      },
      {
        path: '/',
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
        path: '/services/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
       
      },
      {
        path: '/services/:id/commentForm',
        element: <CommentForm></CommentForm>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
        }
      
      ]
    },
  ]);