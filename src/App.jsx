import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './style.css';
import 'boxicons/css/boxicons.min.css';
import PropTypes from 'prop-types';
import { CartProvider } from './contexts/CartContext';

// Lazy load components
const TopBar = lazy(() => import('./components/TopBar'));
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Collection = lazy(() => import('./components/Collection'));
const Products = lazy(() => import('./components/Products'));
const Updates = lazy(() => import('./components/Updates'));
const Support = lazy(() => import('./components/Support'));
const Footer = lazy(() => import('./components/Footer'));
const Cart = lazy(() => import('./components/Cart'));

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Suspense fallback={<div aria-live="polite">Loading...</div>}>
          <div>
            <TopBar />
            <Navbar />
            <ScrollToTop />
            <main className="container">
              <Routes>
                <Route
                  path="/"
                  element={
                    <section aria-label="Homepage">
                      <Home />
                      <Collection />
                      <Products />
                      <Updates />
                      <Support />
                      <Footer />
                    </section>
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/store" element={<Products />} />
                <Route path="/tech-blog" element={<Updates />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<div role="alert">404 - Page Not Found</div>} />
              </Routes>
            </main>
          </div>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;