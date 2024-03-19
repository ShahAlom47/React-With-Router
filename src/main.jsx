import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorMsg.jsx';
import Home from './Components/Home.jsx'
import Hero from './Components/Hero.jsx';
import LoginForm from './Components/LoginForm.jsx';
import Carousel from './Components/Carousel.jsx';

// import ErrorPage from './Components/ErrorMsg.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorPage />,
   
    children:[
      {
        path:'/',
        element:<Hero></Hero>
      },
      {
        path:'/login',
        element:<LoginForm></LoginForm>
      },
      {
        path:'/caro',
        element:<Carousel></Carousel>
      }
    ]
 
  
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
