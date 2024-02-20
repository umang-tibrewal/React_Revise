import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cb from './Components/CB/Cb.jsx'
import Password from './Components/Passwod/Password.jsx'

const router=createBrowserRouter([
  {

    path:"/",
    element:<Layout />,
    children:[

{
 path:"",
 element:<Home />
},
{

  path:"/cb",
  element:<Cb/>
}
,{

  path:"/pass",
  element:<Password />
}


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  />
  </React.StrictMode>
)