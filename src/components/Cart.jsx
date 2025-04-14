import PropTypes from 'prop-types';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <section className="cart-page" aria-labelledby="cart-title">
      <h2 id="cart-title">Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul role="list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                <div>
                  <button
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total">Total: ${totalPrice}</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      ) : (
        <p role="alert">Cart is empty</p>
      )}
    </section>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
};

export default Cart;