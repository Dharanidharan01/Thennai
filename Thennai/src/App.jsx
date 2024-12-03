import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FarmingGuide from './pages/FarmingGuide';
import TamilNadu from './pages/state/TamilNadu';
import ScrollToTop from './components/ScrollToTop';
import Kerala from './pages/state/Kerala';
import Karnataka from './pages/state/Karnataka';
import AndhraPradesh from './pages/state/AndhraPradesh';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="farmingguide" element={<FarmingGuide />} />
        <Route path="tamilnadu" element={<TamilNadu />} />
        <Route path="kerala" element={<Kerala />} />
        <Route path="kar" element={<Karnataka />} />
        <Route path="ap" element={<AndhraPradesh />} />
        <Route path="AboutUS" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
