import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Portfolio/>
      }
      {
        path: '/About',
        element: <About/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Resume',
        element: <Resume/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>

)
