import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

function App() {
  

  return (
    <>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/wishlist" element={<Wishlist/>} />
  </Routes>
  <Footer/>


    </>
  )
}

export default App


