import { useState } from 'react';
import PropTypes from 'prop-types';
import '../style.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter a valid email');
      return;
    }
    // Placeholder for API call (e.g., Mailchimp)
    console.log('Subscribing:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <footer aria-label="Footer navigation and newsletter">
      <div className="footer-container container">
        <div className="footer-about">
          <img
            src="/assets/logo.webp"
            alt="TechTrendz Logo"
            width="60"
            height="60"
            loading="lazy"
          />
          <p>TechTrendz delivers innovation at your fingertips with a commitment to quality and sustainability.</p>
          <img
            src="https://img.freepik.com/free-vector/people-using-online-payment-mobile-app-cartoon-illustration_74855-14481.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740"
            alt=""
            width="150"
            height="40"
            loading="lazy"
          />
        </div>
        <div className="footer-links">
          <h4>EXPLORE</h4>
          <a href="#products?category=smartphones">Smartphones</a>
          <a href="#products?category=wearables">Wearables</a>
          <a href="#products?category=accessories">Accessories</a>
          <a href="#products">Deals</a>
        </div>
        <div className="footer-services">
          <h4>SERVICES</h4>
          <a href="#support">Help Center</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank" rel="noopener noreferrer">Payments</a>
          <a href="https://delivery-status-sb.netlify.app/" target="_blank" rel="noopener noreferrer">Shipping</a>
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank" rel="noopener noreferrer">Returns</a>
        </div>
        <div className="footer-newsletter">
          <h4>STAY UPDATED</h4>
          <p>Subscribe for the latest tech news, product drops, and exclusive offers!</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              <i className='bx bx-envelope' aria-hidden="true"></i>
            </button>
            {message && <p role="alert">{message}</p>}
          </form>
          <hr aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;