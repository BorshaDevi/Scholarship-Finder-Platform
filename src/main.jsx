import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root.jsx';
import Home from './RouteGroups/Home.jsx';
import SignUp from './RouteGroups/SingUp.jsx';
import SignIn from './RouteGroups/SingIn.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';





const queryClient = new QueryClient()


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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
   <RouterProvider router={router}>
   </RouterProvider>
   </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
