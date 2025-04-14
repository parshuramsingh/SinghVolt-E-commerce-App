import PropTypes from 'prop-types';

function TopBar() {
  return (
    <section className="top-bar" aria-label="Promotions and account links">
      <div className="header container">
        <div className="promo-text">
          <p>Free delivery on orders over $50 | 15-day hassle-free returns</p>
        </div>
        <div className="auth-links">
          <a href="/login">LOG IN</a>
          <a href="/register">REGISTER</a>
        </div>
      </div>
    </section>
  );
}

TopBar.propTypes = {};

export default TopBar;