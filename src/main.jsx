import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root.jsx';
import Home from './RouteGroups/Home.jsx';
import SignUp from './RouteGroups/SingUp.jsx';
import SignIn from './RouteGroups/SingIn.jsx';
 const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[{
      path:'/',
      Component:Home,
    },
    {
      path:'/signUp',
      Component:SignUp,
    },
    {
      path:'/signIn',
      Component:SignIn,
    },
  ]
  }
 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
