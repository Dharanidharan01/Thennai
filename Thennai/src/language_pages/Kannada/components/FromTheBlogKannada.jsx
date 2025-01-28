import React from 'react';
import { motion } from 'framer-motion';
import '../components/FromTheBlog.css';

// Import images using the correct import syntax
import coconutFoodImage from '../../../assets/coconutfood.jpg'; 
import coconutoilImage from '../../../assets/coconutoil.jpg'; 
import coconutmilkImage from '../../../assets/coconutmilk.jpg'; 
import coconutcareImage from '../../../assets/skincare.jpg'; 

// Sample blog data with minimal content
const blogPosts = [
  {
    title: "ಮೆಣಸು ನೀರು: ಪ್ರಕೃತಿಯ ಅತ್ಯುತ್ತಮ ಕುಡಿಯುವ ನೀರು",
    description: "ಮೆಣಸು ನೀರಿನ ಅದ್ಭುತ ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ, ದೇಹದ ಆರೋಗ್ಯವನ್ನು ಸುಧಾರಿಸುವುದರಿಂದ ಹಿಡಿದು ಸುಲಭವಾಗಿ ನೀರಿನ ಮಟ್ಟವನ್ನು ಹೆಚ್ಚಿಸುವವರೆಗೆ.",
    image: coconutFoodImage, // ಆಮದು ಮಾಡಿದ ಚಿತ್ರವನ್ನು ಬಳಸುವುದು
    link: "https://medium.com/@thennai/coconut-water-natures-best-drink-206d3b922e10",
  },
  {
    title: "ತೇಂಗಾಯಿ ಎಣ್ಣೆ ನಿಮ್ಮ ಚರ್ಮದ ಆರೋಗ್ಯವನ್ನು ಹೇಗೆ ಕಾಪಾಡುತ್ತದೆ",
    description: "ತೇಂಗಾಯಿ ಎಣ್ಣೆ ಪ್ರಕೃತಿಯಾಗಿ ನಿಮ್ಮ ಚರ್ಮವನ್ನು ಹಸಿವಾಗುವಂತೆ ಮತ್ತು ಪ್ರಕಾಶಮಾನವಾಗಿಸಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ.",
    image: coconutoilImage, // ಆಮದು ಮಾಡಿದ ಚಿತ್ರವನ್ನು ಬಳಸುವುದು
    link: "https://medium.com/@thennai/how-coconut-oil-supports-your-skin-health-6273573a2b21",
  },
  {
    title: "ತೇಂಗಾಯಿನ 5 ಅದ್ಭುತ ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳು",
    description: "ತೇಂಗಾಯಿಗಳಲ್ಲಿ ಅಗತ್ಯವಿರುವ ಪೋಷಕಾಂಶಗಳು ತುಂಬಿಕೊಂಡಿವೆ, ಅವು ವಿವಿಧ ರೀತಿಯಲ್ಲಿ ನಿಮ್ಮ ದೇಹದ ಆರೋಗ್ಯವನ್ನು ಸುಧಾರಿಸಬಹುದು.",
    image: coconutcareImage, // ಆಮದು ಮಾಡಿದ ಚಿತ್ರವನ್ನು ಬಳಸುವುದು
    link: "https://medium.com/@thennai/1-boosts-heart-health-f30b6d4fde51",
  },
  {
    title: "ಪಾರಂಪರಿಕ ಅಡುಗೆಮೆನೇ ತೇಂಗಾಯಿನ ಪಾತ್ರ",
    description: "ಈ ಜಗತ್ತಿನಲ್ಲಿರುವ ಹಲವು ಪಾರಂಪರಿಕ ಅಡುಗೆಗಳಲ್ಲಿ ತೇಂಗಾಯಿನ ಬಳಕೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.",
    image: coconutmilkImage, // ಆಮದು ಮಾಡಿದ ಚಿತ್ರವನ್ನು ಬಳಸುವುದು
    link: "https://medium.com/@thennai/the-role-of-coconut-in-traditional-cooking-dbad103763c4",
  }
];

const FromTheBlogKannada = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">ಬ್ಲಾಗ್‌ನಿಂದ</h2>
      <h3 className="blog-subtitle">ನ್ಯೂಸ್ & ಲೇಖನಗಳು</h3>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-post"
            key={index}
            whileHover={{ scale: 1.05 }} // ಹೋವರ್ ನಲ್ಲಿ ಅನಿಮೇಶನ್
            whileTap={{ scale: 0.95 }} // ಟ್ಯಾಪ್ ನಲ್ಲಿ ಅನಿಮೇಶನ್
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-content">
              <h4 className="blog-title">{post.title}</h4>
              <p className="blog-description">{post.description}</p>
              <a className="read-more" href={post.link}>ಮತ್ತೆ ಓದು</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default FromTheBlogKannada;
