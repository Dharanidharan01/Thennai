import React from 'react';
import { motion } from 'framer-motion';
import '../components/FromTheBlog.css';

// ചിത്രങ്ങൾ ശരിയായ ഇൻപോർട്ട് സിന്റാക്സിന്റെ ഉപയോഗം
import coconutFoodImage from '../../../assets/coconutfood.jpg'; 
import coconutoilImage from '../../../assets/coconutoil.jpg'; 
import coconutmilkImage from '../../../assets/coconutmilk.jpg'; 
import coconutcareImage from '../../../assets/skincare.jpg'; 

const blogPosts = [
  {
    title: "തേങ്ങാവെള്ളം: പ്രകൃതിയുടെ മികച്ച പാനീയം",
    description: "തേങ്ങാവെള്ളത്തിന്റെ അത്ഭുത ഗുണങ്ങൾ അറിയൂ, ജലാംശം നൽകുന്നത് മുതൽ പ്രതിരോധശേഷി വർദ്ധിപ്പിക്കുന്നത് വരെ.",
    image: coconutFoodImage,
    link: "https://medium.com/@thennai/coconut-water-natures-best-drink-206d3b922e10",
  },
  {
    title: "തേങ്ങാ എണ്ണ ത്വക്കിന്റെ ആരോഗ്യത്തെ എങ്ങനെ പിന്തുണയ്ക്കുന്നു",
    description: "തേങ്ങാ എണ്ണ പ്രകൃതിദത്തമായി യുവത്വം നിറഞ്ഞ ത്വക്ക് നിലനിർത്താൻ എങ്ങനെ സഹായിക്കുന്നുവെന്ന് അറിയുക.",
    image: coconutoilImage,
    link: "https://medium.com/@thennai/how-coconut-oil-supports-your-skin-health-6273573a2b21",
  },
  {
    title: "തേങ്ങയുടെ 5 അത്ഭുതകരമായ ആരോഗ്യ ഗുണങ്ങൾ",
    description: "തേങ്ങയിലെ പ്രധാന പോഷകങ്ങൾ നിന്റെ ആരോഗ്യം പലവിധത്തിൽ മെച്ചപ്പെടുത്താൻ എങ്ങനെ സഹായിക്കുന്നുവെന്ന് കണ്ടെത്തുക.",
    image: coconutcareImage,
    link: "https://medium.com/@thennai/1-boosts-heart-health-f30b6d4fde51",
  },
  {
    title: "പരമ്പരാഗത പാചകത്തിൽ തേങ്ങയുടെ പങ്ക്",
    description: "ലോകത്തിന്റെ വിവിധ ഭാഗങ്ങളിലെ പരമ്പരാഗത വിഭവങ്ങളിൽ തേങ്ങ എങ്ങനെ ഉപയോഗിക്കുന്നുവെന്ന് പരിചയപ്പെടുക.",
    image: coconutmilkImage,
    link: "https://medium.com/@thennai/the-role-of-coconut-in-traditional-cooking-dbad103763c4",
  }
];

const FromTheBlogMalayalam = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">ബ്ലോഗിൽ നിന്ന്</h2>
      <h3 className="blog-subtitle">തേങ്ങയെക്കുറിച്ചുള്ള വാർത്തകളും ലേഖനങ്ങളും</h3>
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