import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Component/Layout/layout.jsx'
import Home from './Component/Home/Home.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'

// const router=createBrowserRouter([

//   {
//     path:"/",
//     element:<Layout />,
//     children:[
      
//       {

//         path:"",
//         element:<Home />


//     },
//   {
//     path:"/Contact",
//     element:<Contact/>


//   }]
//   }

// ])

const route=createBrowserRouter(

createRoutesFromElements(

<Route path="/"  element={<Layout />}>
<Route  path=""  element={<Home/>} />
<Route  path="Contact"  element={<Contact />} />
<Route path="user/:userid" element={<User />}/>


</Route>

 
)




)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={route} />
  </React.StrictMode>,
)
