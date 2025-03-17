import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Home.css';

import fashion1 from '../assets/fashion1.jpg';
import fashion8 from '../assets/fashion8.jpg';
import fashion3 from '../assets/fashion3.jpg';  
import fashion4 from '../assets/fashion4.jpg';
import fashion5 from '../assets/fashion5.jpg';
import fashion6 from '../assets/fashion6.jpg';

const posts = [
  { id: "fashion1", img: fashion1, title: "The Top Fall 2025 Copenhagen Fashion Week Trends", description: "Explore the key trends from Copenhagen Fashion Week this fall..." },
  { id: "fashion8", img: fashion8, title: "The Fall 2025 Menswear Trends Paint a Portrait of Fashion", description: "A detailed look into the fall 2025 menswear collection..." },
  { id: "fashion3", img: fashion3, title: "Ultimate Guide to Fall Fashion 2025", description: "Your ultimate guide to mastering fall fashion 2025..." },
  { id: "fashion4", img: fashion4, title: "Latest Winter Fashion Collection 2025", description: "A preview of the most exciting winter fashion collections for 2025..." },
  { id: "fashion5", img: fashion5, title: "How to Dress Stylishly on a Budget", description: "Learn how to create a stylish wardrobe without breaking the bank..." },
  { id: "fashion6", img: fashion6, title: "The Best Summer Fashion Trends in 2025", description: "An in-depth look at the best summer fashion trends for 2025..." }
];

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === postId);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <img src={post.img} alt={post.title} />
      <p>{post.description}</p>
      <button onClick={() => navigate('/')} className="back-button">
        Back to Blog
      </button>
    </div>
  );
};

export default PostDetail;
