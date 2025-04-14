import PropTypes from 'prop-types';
import '../style.css';

function Collection() {
  const categories = [
    { name: "Smartphones", image: "/assets/smartphone.webp", filter: "smartphones" },
    { name: "Wearables", image: "/assets/wearable.webp", filter: "wearables" },
    { name: "Tech Accessories", image: "/assets/accessory.webp", filter: "accessories" },
  ];

  return (
    <section id="collection" aria-labelledby="categories-title">
      <h2 id="categories-title" className="sr-only">Product Categories</h2>
      <div className="categories container">
        {categories.map((category, index) => (
          <div className="cat-item" key={index}>
            <img
              src={category.image}
              alt={category.name}
              width="350"
              height="350"
              loading="lazy"
            />
            <div className="cat-content">
              <p>{category.name}</p>
              <button>
                <a href={`#products?category=${category.filter}`}>BROWSE</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Collection.propTypes = {};

export default Collection;