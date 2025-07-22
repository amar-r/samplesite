import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Resources = lazy(() => import('./pages/Resources'));
const Booking = lazy(() => import('./pages/Booking'));

const LoadingFallback = () => (
  <div className="text-center p-12">
    <h1 className="text-2xl font-bold">Loading...</h1>
  </div>
);

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex flex-col font-sans">
      <Header />
      <main className="container mx-auto p-6 flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App
