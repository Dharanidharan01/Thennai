import React from 'react';
import { motion } from 'framer-motion';
import '../components/FromTheBlog.css';

// ചിത്രങ്ങൾ ശരിയായ ഇൻപോർട്ട് സിന്റാക്സിന്റെ ഉപയോഗം
import coconutFoodImage from '../../../assets/coconutfood.jpg'; 
import coconutoilImage from '../../../assets/coconutoil.jpg'; 
import coconutmilkImage from '../../../assets/coconutmilk.jpg'; 
import coconutcareImage from '../../../assets/skincare.jpg'; 

// കുറഞ്ഞ ഉള്ളടക്കമുള്ള സാമ്പിൾ ബ്ലോഗ് ഡാറ്റ
const blogPosts = [
  {
    title: "തേങ്ങാ വെള്ളം: പ്രകൃതിയുടെ ഏറ്റവും മികച്ച പാനീയം",
    description: "തേങ്ങാ വെള്ളത്തിന്റെ അത്ഭുതകരമായ ആരോഗ്യ ഗുണങ്ങൾ കണ്ടെത്തുക, ഹൈഡ്രേഷൻ മുതൽ പ്രതിരോധ ശേഷി വർദ്ധിപ്പിക്കുക വരെ.",
    image: coconutFoodImage, // ഇൻപോർട്ട് ചെയ്ത ചിത്രം ഉപയോഗിക്കുക
    link: "https://medium.com/@thennai/coconut-water-natures-best-drink-206d3b922e10",
  },
  {
    title: "തേങ്ങാ എണ്ണ നിങ്ങളുടെ ചർമ്മാരോഗ്യത്തെ എങ്ങനെ പിന്തുണക്കുന്നു",
    description: "തേങ്ങാ എണ്ണ പ്രകൃതികമായും യുവത്വം നിറഞ്ഞ ചർമ്മം നിലനിർത്താൻ എങ്ങനെ സഹായിക്കുന്നു എന്ന് പഠിക്കുക.",
    image: coconutoilImage, // ഇൻപോർട്ട് ചെയ്ത ചിത്രം ഉപയോഗിക്കുക
    link: "https://medium.com/@thennai/how-coconut-oil-supports-your-skin-health-6273573a2b21",
  },
  {
    title: "തേങ്ങകളുടെ 5 അത്ഭുതകരമായ ആരോഗ്യ ഗുണങ്ങൾ",
    description: "തേങ്ങകൾ നിരവധി വഴികളിൽ നിങ്ങളുടെ ആരോഗ്യം മെച്ചപ്പെടുത്താൻ സഹായിക്കുന്ന പ്രധാനം ആകുന്ന പോഷക ഘടകങ്ങൾ നിറഞ്ഞതാണ്.",
    image: coconutcareImage, // ഇൻപോർട്ട് ചെയ്ത ചിത്രം ഉപയോഗിക്കുക
    link: "https://medium.com/@thennai/1-boosts-heart-health-f30b6d4fde51",
  },
  {
    title: "പരമ്പരാഗത പാചകത്തിൽ തേങ്ങയുടെ വേഷം",
    description: "ലോകമാകെയുള്ള വിവിധ പരമ്പരാഗത റെസിപ്പികളിൽ തേങ്ങ എങ്ങനെ ഉപയോഗിക്കുന്നു എന്ന് പരിശോധിക്കുക.",
    image: coconutmilkImage, // ഇൻപോർട്ട് ചെയ്ത ചിത്രം ഉപയോഗിക്കുക
    link: "https://medium.com/@thennai/the-role-of-coconut-in-traditional-cooking-dbad103763c4",
  }
];

const FromTheBlogMalayalam = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">ബ്ലോഗിൽ നിന്നുള്ളത്</h2>
      <h3 className="blog-subtitle">വാർത്തകളും ലേഖനങ്ങളും</h3>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-post"
            key={index}
            whileHover={{ scale: 1.05 }} // ഹോവറിന്റെ ഓനിമേഷൻ
            whileTap={{ scale: 0.95 }} // ടാപ്പിന്റെ ഓനിമേഷൻ
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-content">
              <h4 className="blog-title">{post.title}</h4>
              <p className="blog-description">{post.description}</p>
              <a className="read-more" href={post.link}>കൂടുതൽ വായിക്കുക</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FromTheBlogMalayalam;
