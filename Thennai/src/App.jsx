import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingSpinner from './LoadingSpinner';
import NotFoundPage from './NotFoundPage';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lazy load components with retry functionality
const lazyLoadWithRetry = (componentImport) => {
  const LazyComponent = React.lazy(componentImport);

  return (props) => (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

// Lazy loaded components
const HomePage = lazyLoadWithRetry(() => import('./pages/HomePage'));
const TamilNadu = lazyLoadWithRetry(() => import('./pages/state/TamilNadu'));
const Kerala = lazyLoadWithRetry(() => import('./pages/state/Kerala'));
const Karnataka = lazyLoadWithRetry(() => import('./pages/state/Karnataka'));
const AndhraPradesh = lazyLoadWithRetry(() => import('./pages/state/AndhraPradesh'));
const AboutUs = lazyLoadWithRetry(() => import('./pages/AboutUs'));
const BenefitsOfCoconut = lazyLoadWithRetry(() => import('./pages/BenefitsOfCoconut'));
const FarmingGuide1 = lazyLoadWithRetry(() => import('./pages/state/FarmingGuide1'));
const HomePageTamil = lazyLoadWithRetry(() => import('./language_pages/Tamil/pages/HomePageTamil'));
const AboutUsTamil = lazyLoadWithRetry(() => import('./language_pages/Tamil/pages/AboutUsTamil'));
const BenefitsOfCoconutTamil = lazyLoadWithRetry(() => import('./language_pages/Tamil/pages/BenefitsOfCoconutTamil'));
const FarmingGuideTamil2 = lazyLoadWithRetry(() => import('./language_pages/Tamil/pages/FarmingGuideTamil2'));
const ProductPageTamil = lazyLoadWithRetry(() => import('./language_pages/Tamil/pages/ProductPageTamil'));
const ProductPage = lazyLoadWithRetry(() => import('./pages/ProductPage'));
const HomePageMalayalam = lazyLoadWithRetry(() => import('./language_pages/Malayalam/pages/HomePageMalayalam'));
const AboutUsPageMalayalam = lazyLoadWithRetry(() => import('./language_pages/Malayalam/pages/AboutUsPageMalayalam'));
const FarmingGuideMalayalam = lazyLoadWithRetry(() => import('./language_pages/Malayalam/pages/FarmingGuidePageMalayalam'));
const BenefitsOfCoconutMalayalam = lazyLoadWithRetry(() => import('./language_pages/Malayalam/pages/BenefitsOfCoconutPageMalayalam'));
const HomePageKannada= lazyLoadWithRetry(() => import('./language_pages/Kannada/pages/HomePageKannada'));
const AboutUsKannada= lazyLoadWithRetry(() => import('./language_pages/Kannada/pages/AboutUsKannada'));
const BenefitsOfCoconutKannada= lazyLoadWithRetry(() => import('./language_pages/Kannada/pages/BenefitsOfCoconutKannada'));
const FarmingGuideKannada= lazyLoadWithRetry(() => import('./language_pages/Kannada/pages/FarmingGuideKannada'));
const HomePageHindi= lazyLoadWithRetry(() => import('./language_pages/Hindi/pages/HomePageHindi'));
const AboutusHindi= lazyLoadWithRetry(() => import('./language_pages/Hindi/pages/AboutusHindi'));
const BenefitsOfCoconutHindi= lazyLoadWithRetry(() => import('./language_pages/Hindi/pages/BenefitsOfCoconutHindi'));
const FarmingGuideHindi= lazyLoadWithRetry(() => import('./language_pages/Hindi/pages/FarmingGuideHindi'));



const App = () => {
  return (
    <Router>
     
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tamilnadu" element={<TamilNadu />} />
            <Route path="kerala" element={<Kerala />} />
            <Route path="kar" element={<Karnataka />} />
            <Route path="ap" element={<AndhraPradesh />} />
            <Route path="AboutUS" element={<AboutUs />} />
            <Route path="BenefitsOfCoconut" element={<BenefitsOfCoconut />} />
            <Route path="fg" element={<FarmingGuide1 />} />
            <Route path="Homepagetamil" element={<HomePageTamil />} />
            <Route path="Aboutustamil" element={<AboutUsTamil />} />
            <Route path="BenefitsOfCoconutTamil" element={<BenefitsOfCoconutTamil />} />
            <Route path="fgt" element={<FarmingGuideTamil2 />} />
            <Route path="ppt" element={<ProductPageTamil />} />
            <Route path="pp" element={<ProductPage/>} />
          {/*  <Route path="Malayalam" element={<HomePageMalayalam/>} 
            <Route path="AboutUsMalayalam" element={<AboutUsPageMalayalam/>} />
            <Route path="FarmingGuideMalayalam" element={<FarmingGuideMalayalam/>} />
            <Route path="BenefitsOfCoconutMalayalam" element={<BenefitsOfCoconutMalayalam/>} />
            <Route path="HomepageKannada" element={<HomePageKannada/>} />
            <Route path="AboutUsKannada" element={<AboutUsKannada/>} />
            <Route path="BenefitsOfCoconutKannada" element={<BenefitsOfCoconutKannada/>} />
            <Route path="FarmingGuideKannada" element={<FarmingGuideKannada/>} />
            <Route path="HomePageHindi" element={<HomePageHindi/>} />
            <Route path="AboutusHindi" element={<AboutusHindi/>} />
            <Route path="BenefitsOfCoconutHindi" element={<BenefitsOfCoconutHindi/>} />
            <Route path="FarmingGuideHindi" element={<FarmingGuideHindi/>} />/>*/}
            {/* 404 fallback route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
