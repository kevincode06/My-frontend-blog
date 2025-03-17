import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Import images
import fashion1 from '../assets/fashion1.jpg';
import fashion8 from '../assets/fashion8.jpg';
import fashion3 from '../assets/fashion3.jpg';  
import fashion4 from '../assets/fashion4.jpg';
import fashion5 from '../assets/fashion5.jpg';
import fashion6 from '../assets/fashion6.jpg';

const posts = [
  { id: "fashion1", img: fashion1, title: "The Top Fall 2025 Copenhagen Fashion Week Trends", description: "Explore the key trends from Copenhagen Fashion Week this fall, with a focus on sustainability and innovative designs." },
  { id: "fashion8", img: fashion8, title: "The Fall 2025 Menswear Trends Paint a Portrait of Fashion", description: "A detailed look into the fall 2025 menswear collection, showcasing classic styles and modern twists." },
  { id: "fashion3", img: fashion3, title: "Ultimate Guide to Fall Fashion 2025", description: "Your ultimate guide to mastering fall fashion 2025, with tips on layering, colors, and textures." },
  { id: "fashion4", img: fashion4, title: "Latest Winter Fashion Collection 2025", description: "A preview of the most exciting winter fashion collections for 2025, from cozy outerwear to bold accessories." },
  { id: "fashion5", img: fashion5, title: "How to Dress Stylishly on a Budget", description: "Learn how to create a stylish wardrobe without breaking the bank, with affordable fashion finds and tips." },
  { id: "fashion6", img: fashion6, title: "The Best Summer Fashion Trends in 2025", description: "An in-depth look at the best summer fashion trends for 2025, from bright colors to breezy fabrics." }
];

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1 className="main-heading">Fashion Trends</h1>
        <p className="subheading">Stay updated with the latest fashion styles, trends, and insights!</p>
      </header>

      <section className="latest-trends">
        <h2>Latest in Trends</h2>
        <div className="trend-grid">
          {posts.map((post) => (
            <div key={post.id} className="trend-card">
              <img src={post.img} alt={post.title} />
              <p>{post.title}</p>
              <Link to={`/blog/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
