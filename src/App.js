import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';

export default function App() {
  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </>
  )
}
