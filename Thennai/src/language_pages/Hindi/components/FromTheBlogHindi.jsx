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
    title: "नारियल पानी: प्रकृति का बेहतरीन पेय",
    description: "नारियल पानी के अद्भुत स्वास्थ्य लाभों के बारे में जानें, जो स्वास्थ्य को बढ़ाने से लेकर आसान हाइड्रेशन तक में मदद करता है।",
    image: coconutFoodImage, // इम्पोर्ट की गई छवि का उपयोग करें
    link: "https://medium.com/@thennai/coconut-water-natures-best-drink-206d3b922e10",
  },
  {
    title: "नारियल तेल आपकी त्वचा की देखभाल कैसे करता है",
    description: "जानें कि नारियल तेल कैसे स्वाभाविक रूप से आपकी त्वचा को युवा और चमकदार बनाए रखने में मदद करता है।",
    image: coconutoilImage, // इम्पोर्ट की गई छवि का उपयोग करें
    link: "https://medium.com/@thennai/how-coconut-oil-supports-your-skin-health-6273573a2b21",
  },
  {
    title: "नारियल के 5 अद्भुत स्वास्थ्य लाभ",
    description: "नारियल में आवश्यक पोषक तत्व होते हैं जो विभिन्न तरीकों से आपके स्वास्थ्य को बेहतर बना सकते हैं।",
    image: coconutcareImage, // इम्पोर्ट की गई छवि का उपयोग करें
    link: "https://medium.com/@thennai/1-boosts-heart-health-f30b6d4fde51",
  },
  {
    title: "पारंपरिक भोजन में नारियल की भूमिका",
    description: "दुनिया भर में विभिन्न पारंपरिक व्यंजनों में नारियल के उपयोग का अन्वेषण करें।",
    image: coconutmilkImage, // इम्पोर्ट की गई छवि का उपयोग करें
    link: "https://medium.com/@thennai/the-role-of-coconut-in-traditional-cooking-dbad103763c4",
  }
];

const FromTheBlogHindi = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">ब्लॉग से</h2>
      <h3 className="blog-subtitle">समाचार और लेख</h3>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-post"
            key={index}
            whileHover={{ scale: 1.05 }} // होवर पर ऐनिमेशन
            whileTap={{ scale: 0.95 }} // टैप पर ऐनिमेशन
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-content">
              <h4 className="blog-title">{post.title}</h4>
              <p className="blog-description">{post.description}</p>
              <a className="read-more" href={post.link}>और पढ़ें</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default FromTheBlogHindi;
