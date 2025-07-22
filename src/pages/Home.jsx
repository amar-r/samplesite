import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Meta from '../components/Meta';
import Card from '../components/Card';
import services from '../data/services.json';
import reviews from '../data/reviews.json';

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const featuredReview = reviews[0];

  return (
    <>
      <Meta title="Welcome" />

      {/* Hero Section */}
      <div 
        className="relative text-gray-800 dark:text-white text-center py-24 md:py-40 bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-rose-50/70 dark:bg-gray-900/70"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Supporting Your Breastfeeding Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Gentle, expert, and heartfelt support for you and your baby.
          </p>
          <Link to="/book">
            <Button>Book a Free Consultation</Button>
          </Link>
        </div>
      </div>

      <div className="py-16 bg-rose-50/30 dark:bg-gray-800/20">
        <div className="container mx-auto px-6">
          
          {/* Why Choose Me Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-8">A Nurturing Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <h3 className="text-2xl font-heading text-rose-600 dark:text-rose-400 mb-2">IBCLC Certified</h3>
                <p>As an International Board Certified Lactation Consultant, I provide the gold standard in clinical lactation care.</p>
              </Card>
              <Card>
                <h3 className="text-2xl font-heading text-rose-600 dark:text-rose-400 mb-2">Registered Nurse</h3>
                <p>My background as an RN ensures a holistic, evidence-based approach to your family's health and well-being.</p>
              </Card>
              <Card>
                <h3 className="text-2xl font-heading text-rose-600 dark:text-rose-400 mb-2">Personalized Support</h3>
                <p>Every family is unique. I tailor my care to your specific needs, goals, and circumstances.</p>
              </Card>
            </div>
          </section>

          {/* Services Preview Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-8">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map(service => (
                <Card key={service.id} className="flex flex-col">
                  <h3 className="text-2xl font-heading text-rose-600 dark:text-rose-400 mb-2">{service.title}</h3>
                  <p className="flex-grow mb-4">{service.description.substring(0, 100)}...</p>
                  <Link to={`/services#${service.id}`}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </Card>
              ))}
            </div>
            <div className="mt-8">
                <Link to="/services" className="font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 text-lg">
                    View All Services &rarr;
                </Link>
            </div>
          </section>

          {/* Featured Testimonial Section */}
          <section className="text-center">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-8">From One Mother to Another</h2>
             <Card className="max-w-3xl mx-auto bg-rose-100/50 dark:bg-gray-800 border-l-4 border-rose-500 dark:border-rose-400">
                <p className="text-xl italic">"{featuredReview.text}"</p>
                <p className="font-bold text-gray-700 dark:text-gray-300 mt-4">- {featuredReview.author}</p>
             </Card>
             <div className="mt-8">
                <Link to="/reviews" className="font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 text-lg">
                    Read More Reviews &rarr;
                </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Home;
