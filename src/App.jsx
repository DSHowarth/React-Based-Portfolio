import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header/>
      <main><Outlet/></main>

      <Footer/>
    </>
  )
}

export default App