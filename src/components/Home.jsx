import PropTypes from 'prop-types';
import '../style.css';
import 'boxicons/css/boxicons.min.css';

function Home({ title = "SINGH VOLT 2025", description, image }) {
  return (
    <section id="home" aria-labelledby="hero-title">
      <div className="hero-section">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 580w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 880w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1160w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1180w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1480w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1760w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1780w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2080w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2360w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2380w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2680w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2960w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2980w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3280w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3560w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3580w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3880w, https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=3890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3890w"
            alt="Tech Gadgets"
            width="600"
            height="600"
            loading="lazy"
          />
        </div>
        <div className="hero-content">
          <p className="category">GADGET LAUNCH</p>
          <h2 id="hero-title">{title}</h2>
          <div className="hero-desc">
            <p>{description || "Discover cutting-edge gadgets designed for the future. Built with precision and a focus on seamless user experiences."}</p>
          </div>
          <button>
            <a href="#products">EXPLORE NOW</a>
            <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
          </button>
          <div className="social-links" aria-label="Social media links">
            <a href="#" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="bx bxl-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="bx bxl-youtube"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Home;