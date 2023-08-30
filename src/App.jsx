import './css/App.css'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './components/Header'

export default function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
