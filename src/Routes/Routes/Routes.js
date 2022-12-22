

import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Servicess from "../../Pages/Servicess/Servicess";
import CommentForm from "../../../src/Pages/CommentForm/CommentForm"
import SignUp from "../../Shared/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Shared/Login"
import ReviewPage from "../../Pages/ReviewPage/ReviewPage";
import AddServices from "../../Pages/AddServices/AddServices";
import Update from "../../Pages/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
      path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
          return fetch('https://pick-food-server.vercel.app/services')
        }
      },
      {
        path: '/services/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: ({params})=> fetch(`https://pick-food-server.vercel.app/services/${params.id}`)
       
      },
      {
        path: '/services/:id/commentForm',
        element: <PrivateRoute><CommentForm></CommentForm></PrivateRoute>,
        loader: ({params})=> fetch(`https://pick-food-server.vercel.app/services/${params.id}`)
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/reviews',
        element:<ReviewPage></ReviewPage>
      },
      {
        path: '/addServices',
        element: <AddServices></AddServices>,
        loader: async () => {
          return fetch('https://pick-food-server.vercel.app/services')
        }
      },
      
      {
        path: '/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/reviews/:id/update',
        element: <Update></Update>,
        loader: ({params})=> fetch(`https://pick-food-server.vercel.app/reviews/${params.id}`)
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
        }
      
      ]
    },
  ]);