import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import ErrorMessage from './components/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorMessage />,
    children: [
      {
        index: true,
        element: <About/>
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>
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
  // We have to use the RouterProvider component to give our router the ability to adjust pages
    <RouterProvider router={router}/>
)
