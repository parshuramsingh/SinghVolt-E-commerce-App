import { useState } from 'react';
import PropTypes from 'prop-types';
import '../style.css';

function Support() {
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.name.value.length < 2) {
      setFormError('Name must be at least 2 characters long');
      return;
    }
    setFormError('');
    form.submit();
  };

  return (
    <section id="support" aria-labelledby="support-title">
      <div className="support-section container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.354139991628!2d73.85674361442647!3d18.520430387413135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0794d8e4c1f%3A0x8c10a9a0f5c9f0e5!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1654260749399!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pune, Maharashtra Location"
          ></iframe>
        </div>

        <form action="https://formspree.io/f/xzbowpjq" method="POST" onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-info">
              <h4>GET IN TOUCH</h4>
              <h1 id="support-title">Support Hub</h1>
              <span>We’re here to assist with your tech needs. Reach out for inquiries or support!</span>
              <h3>USA</h3>
              <p>
                123 Tech Lane, San Francisco, CA 94105<br />
                +1 415-555-1234
              </p>
              <h3>India</h3>
              <p>
                456 Innovation Rd, Pune, MH 411007<br />
                +91 20-5555-6789
              </p>
            </div>
            <div className="form-inputs">
              {formError && <p role="alert" className="error">{formError}</p>}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                aria-describedby={formError ? 'name-error' : undefined}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="52"
                rows="7"
                placeholder="Your Query"
                required
                aria-label="Your query or message"
              ></textarea>
              <button type="submit">SUBMIT QUERY</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

Support.propTypes = {};

export default Support;