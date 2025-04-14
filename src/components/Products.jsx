import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import 'boxicons/css/boxicons.min.css';
import '../style.css';
import { useCart } from '../contexts/CartContext';

function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { search } = useLocation();
  const category = new URLSearchParams(search).get('category') || 'all';
  const [filter, setFilter] = useState(category);

  const products = useMemo(() => [
    {
      id: '1',
      name: 'SINGH VOLT X1 Phone',
      price: 299.99,
      image: 'https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      rating: 4,
      variants: ['silver', 'black', 'blue'],
      category: 'smartphones',
    },
    {
      id: '2',
      name: 'SINGH VOLT Smartwatch',
      price: 149.99,
      image: 'https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-97321.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      rating: 3,
      variants: ['black', 'green', 'red'],
      category: 'wearables',
    },
    {
      id: '3',
      name: 'SINGH VOLT Fast Charger',
      price: 29.99,
      image: 'https://img.freepik.com/free-vector/gradient-hard-drive-illustration_23-2149369149.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      rating: 5,
      variants: ['white', 'black', 'grey'],
      category: 'accessories',
    },
    {
      id: '4',
      name: 'SINGH VOLT Earbuds',
      price: 79.99,
      image: 'https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074297.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      rating: 3,
      variants: ['white', 'blue', 'black'],
      category: 'accessories',
    },
  ], []);

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <section id="products" aria-labelledby="products-title">
      <div className="product-grid container">
        <h2 id="products-title">Featured Gadgets</h2>
        <div className="filter" aria-label="Filter products by category">
          <button onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
          <button onClick={() => setFilter('smartphones')} disabled={filter === 'smartphones'}>Smartphones</button>
          <button onClick={() => setFilter('wearables')} disabled={filter === 'wearables'}>Wearables</button>
          <button onClick={() => setFilter('accessories')} disabled={filter === 'accessories'}>Accessories</button>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width="250"
                height="200"
                loading="lazy"
                style={{ maxWidth: "250px", maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="product-info">
                <p>{product.name}</p>
                <div className="rating" aria-label={`Rated ${product.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={i < product.rating ? 'bx bxs-star' : 'bx bx-star'}
                      aria-hidden="true"
                    ></i>
                  ))}
                </div>
                <div className="price">
                  ${product.price.toFixed(2)}
                  <div className="variants" aria-label="Available colors">
                    {product.variants.map((color, i) => (
                      <i
                        key={i}
                        className="bx bxs-circle"
                        style={{ color }}
                        aria-hidden="true"
                      ></i>
                    ))}
                  </div>
                </div>
                <div className="buy-btn">
                  <button
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Products.propTypes = {
  addToCart: PropTypes.func,
};

export default Products;