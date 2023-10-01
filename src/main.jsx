import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Login from './Components/LoginReg/Login/Login.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Registration from './Components/LoginReg/Registration/Registration'
import ErrorPage from './Components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, {
        path: "/login",
        element: <Login></Login>,
      }, {
        path: "/register",
        element: <Registration></Registration>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
