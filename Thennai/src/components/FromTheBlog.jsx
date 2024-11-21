import React from 'react';
import { motion } from 'framer-motion';
import '../components/FromTheBlog.css';

// Import images using the correct import syntax
import coconutFoodImage from '../assets/coconutfood.jpg'; 
import coconutoilImage from '../assets/coconutoil.jpg'; 
import coconutmilkImage from '../assets/coconutmilk.jpg'; 
import coconutcareImage from '../assets/skincare.jpg'; 

// Sample blog data with minimal content
const blogPosts = [
  {
    title: "Coconut Water: Nature's Best Drink",
    description: "Discover the amazing health benefits of coconut water, from hydration to boosting immunity.",
    image: coconutFoodImage, // Use imported image
    link: "#",
  },
  {
    title: "How Coconut Oil Supports Your Skin Health",
    description: "Learn how coconut oil helps maintain youthful and glowing skin naturally.",
    image: coconutoilImage, // Use imported image
    link: "#",
  },
  {
    title: "5 Surprising Health Benefits of Coconuts",
    description: "Coconuts are packed with essential nutrients that can enhance your health in numerous ways.",
    image: coconutcareImage, // Use imported image
    link: "#",
  },
  {
    title: "The Role of Coconut in Traditional Cooking",
    description: "Explore how coconut is used in various traditional recipes around the world.",
    image: coconutmilkImage, // Use imported image
    link: "#",
  }
];

const FromTheBlog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">From The Blog</h2>
      <h3 className="blog-subtitle">News & Articles</h3>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-post"
            key={index}
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-content">
              <h4 className="blog-title">{post.title}</h4>
              <p className="blog-description">{post.description}</p>
              <a className="read-more" href={post.link}>Read More</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FromTheBlog;
