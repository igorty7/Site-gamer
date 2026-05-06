import { Route, Routes } from 'react-router-dom'
import CartDrawer from './components/CartDrawer.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Toast from './components/Toast.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-void text-zinc-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  )
}

export default App
