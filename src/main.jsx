import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Products from './Products'
import Contact from './Contact'
import Textile from './Textile'
import PrintingPress from './PrintingPress'
import Ceramic from './Ceramic'
import Promotion from './Promotion'
import Anadoludan from './Anadoludan'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "textile",
    element: <Textile />,
  },
  {
    path: "PrintingPress",
    element: <PrintingPress />,
  },
  {
    path: "ceramic",
    element: <Ceramic />,
  },
  {
    path: "promotion",
    element: <Promotion />,
  },
  {
    path: "anadoludan",
    element: <Anadoludan />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
