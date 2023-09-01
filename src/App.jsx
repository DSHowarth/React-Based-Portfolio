import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'
// Getting the page access to bootstrap's css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // Every page needs to have a header and footer, the rest varies according to the router
    <>
      <Header/>
      {/* Outlet is our placeholder component, it'll be replaced by the router according to our routes */}
      <main><Outlet/></main>

      <Footer/>
    </>
  )
}

export default App