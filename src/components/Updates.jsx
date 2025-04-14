import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import 'boxicons/css/boxicons.min.css';

function Updates() {
  // Placeholder for API fetching
  const [posts] = useState([
    {
      id: '1',
      title: 'AI Innovations to Watch in 2025',
      date: '10 April 2025',
      image: 'https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      link: 'https://www.siemens.com/global/en/products/automation/topic-areas/artificial-intelligence-in-industry.html?acz=1&gad_source=1&gclid=CjwKCAjwwe2_BhBEEiwAM1I7sYGW-JQ1CPF1Ir4jKyZLkR8vSt7vuULJB-9OxzndSua3KBrMSHifERoC37QQAvD_BwE',
    },
    {
      id: '2',
      title: 'Blockchain Beyond Crypto',
      date: '15 April 2025',
      image: 'https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480192.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      link: 'https://www.blockchain.com/',
    },
    {
      id: '3',
      title: 'The Rise of Smart Wearables',
      date: '20 April 2025',
      image: 'https://img.freepik.com/free-vector/smartwatch-concept-illustration_114360-4306.jpg?ga=GA1.1.1115681040.1744554441&semt=ais_hybrid&w=740',
      link: 'https://www.happiestminds.com/insights/wearable-technology/',
    },
  ]);

  // Uncomment for real API integration
  /*
  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then(res => res.json())
      .then(setPosts)
      .catch(err => console.error('Failed to fetch posts:', err));
  }, []);
  */

  return (
    <section id="updates" aria-labelledby="updates-title">
      <div className="blog-header">
        <p>TECH UPDATES</p>
        <h2 id="updates-title">Latest in Tech</h2>
      </div>
      <div className="blog-posts container">
        {posts.map((post) => (
          <article className="blog-item" key={post.id}>
            <img
              src={post.image}
              alt={post.title}
              width="300"
              height="200"
              loading="lazy"
            />
            <div className="blog-content">
              <p><i className='bx bxs-calendar' aria-hidden="true"></i> {post.date}</p>
              <h4>{post.title}</h4>
              <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

Updates.propTypes = {};

export default Updates;